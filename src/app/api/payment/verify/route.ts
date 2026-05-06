import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, programId } = body;

    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    // Development mock — auto-succeed
    if (!keySecret || keySecret.includes('PLACEHOLDER')) {
      console.warn('[Razorpay] Mock verification — keys not configured');
      return NextResponse.json({ success: true, mock: true });
    }

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ success: false, error: 'Missing payment verification fields.' }, { status: 400 });
    }

    // Cryptographic signature verification
    const generatedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    const isValid = crypto.timingSafeEqual(
      Buffer.from(generatedSignature, 'hex'),
      Buffer.from(razorpay_signature, 'hex')
    );

    if (!isValid) {
      console.error('[Payment] Signature mismatch', { razorpay_order_id });
      return NextResponse.json({ success: false, error: 'Payment verification failed.' }, { status: 400 });
    }

    // ✅ Payment verified — grant access here
    // TODO: Save to DB: { razorpay_order_id, razorpay_payment_id, programId, userId, timestamp }
    console.log('[Payment Verified]', {
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      programId,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[verify error]', err);
    return NextResponse.json({ success: false, error: 'Verification error.' }, { status: 500 });
  }
}
