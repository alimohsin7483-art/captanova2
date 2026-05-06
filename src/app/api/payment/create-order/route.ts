import { NextRequest, NextResponse } from 'next/server';
import { validatePaymentRequest } from '@/lib/validations';
import { getProgramBySlug, programs } from '@/lib/programs';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { programId, amount } = body;

    // Validate input
    const errors = validatePaymentRequest({ programId, amount });
    if (errors.length > 0) {
      return NextResponse.json({ error: errors[0].message }, { status: 400 });
    }

    // Verify programId exists and amount matches — prevent price tampering
    const program = programs.find((p) => p.id === programId);
    if (!program) {
      return NextResponse.json({ error: 'Program not found.' }, { status: 404 });
    }
    if (program.price !== amount) {
      return NextResponse.json({ error: 'Amount mismatch. Please refresh and try again.' }, { status: 400 });
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    // Development mock
    if (!keyId || keyId.includes('PLACEHOLDER') || !keySecret) {
      console.warn('[Razorpay] Keys not set — returning mock order for development');
      return NextResponse.json({
        orderId: `mock_order_${Date.now()}`,
        amount: amount * 100,
        currency: 'INR',
        mock: true,
      });
    }

    const Razorpay = (await import('razorpay')).default;
    const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });

    const order = await razorpay.orders.create({
      amount: amount * 100, // paise
      currency: 'INR',
      receipt: `cap_${programId}_${Date.now()}`.slice(0, 40),
      notes: { programId, programName: program.name },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (err) {
    console.error('[create-order error]', err);
    return NextResponse.json({ error: 'Failed to create payment order.' }, { status: 500 });
  }
}
