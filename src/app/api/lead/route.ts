import { NextRequest, NextResponse } from 'next/server';
import { validateLeadForm } from '@/lib/validations';

// ─── Email: Resend ────────────────────────────────────────────────────────────

async function sendViaResend(to: string, name: string, source: string) {
  const { Resend } = await import('resend');
  const resend = new Resend(process.env.RESEND_API_KEY);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://captanova.in';
  const year = new Date().getFullYear();

  await resend.emails.send({
    from: process.env.EMAIL_FROM || 'hello@captanova.in',
    replyTo: process.env.EMAIL_REPLY_TO || 'support@captanova.in',
    to,
    subject: 'Your Free Mindset Audit — Captanova',
    html: `
      <!DOCTYPE html>
      <html>
      <body style="margin:0;padding:0;background:#080808;font-family:'Helvetica Neue',Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center" style="padding:48px 24px;">
              <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">
                <!-- Header -->
                <tr>
                  <td style="padding-bottom:40px;border-bottom:1px solid rgba(201,168,76,0.15);">
                    <div style="font-size:22px;letter-spacing:10px;color:#C9A84C;font-weight:300;">CAPTANOVA</div>
                    <div style="font-size:9px;letter-spacing:4px;color:rgba(201,168,76,0.4);text-transform:uppercase;margin-top:4px;">Mindset Coaching</div>
                  </td>
                </tr>
                <!-- Body -->
                <tr>
                  <td style="padding:40px 0;">
                    <h1 style="font-size:30px;font-weight:300;color:#F5F3EF;margin:0 0 8px;line-height:1.3;">
                      Welcome, ${name}.
                    </h1>
                    <h2 style="font-size:24px;font-weight:300;font-style:italic;color:#C9A84C;margin:0 0 28px;">
                      Your Mindset Audit is ready.
                    </h2>
                    <p style="color:rgba(245,243,239,0.5);font-weight:300;line-height:1.8;margin:0 0 20px;font-size:15px;">
                      Thank you for joining the Captanova community. Your free 20-page Mindset Audit reveals the exact mental patterns holding you back — and a clear action plan to break through each one.
                    </p>
                    <p style="color:rgba(245,243,239,0.5);font-weight:300;line-height:1.8;margin:0 0 32px;font-size:15px;">
                      While you wait for the audit, explore our programs — designed to systematically take you from where you are to your highest potential.
                    </p>
                    <a href="${siteUrl}/programs"
                       style="display:inline-block;background:#C9A84C;color:#080808;padding:14px 32px;text-decoration:none;font-size:10px;letter-spacing:3px;text-transform:uppercase;font-weight:600;">
                      EXPLORE PROGRAMS
                    </a>
                  </td>
                </tr>
                <!-- Testimonial snippet -->
                <tr>
                  <td style="border-top:1px solid rgba(255,255,255,0.05);padding-top:32px;padding-bottom:32px;">
                    <p style="color:rgba(245,243,239,0.3);font-size:13px;font-style:italic;line-height:1.7;margin:0 0 12px;">
                      "Captanova changed the trajectory of my entire life. The system is unlike anything else I have tried."
                    </p>
                    <p style="color:rgba(201,168,76,0.5);font-size:11px;letter-spacing:2px;text-transform:uppercase;margin:0;">
                      — Arjun M., Startup Founder
                    </p>
                  </td>
                </tr>
                <!-- Footer -->
                <tr>
                  <td style="border-top:1px solid rgba(255,255,255,0.05);padding-top:24px;">
                    <p style="color:rgba(245,243,239,0.2);font-size:11px;line-height:1.6;margin:0;">
                      © ${year} Captanova · You received this because you signed up via ${source}.<br/>
                      <a href="${siteUrl}/privacy-policy" style="color:rgba(201,168,76,0.3);text-decoration:none;">Privacy Policy</a>
                      &nbsp;·&nbsp;
                      <a href="${siteUrl}/terms" style="color:rgba(201,168,76,0.3);text-decoration:none;">Terms</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  });
}

// ─── Email: Nodemailer fallback ───────────────────────────────────────────────

async function sendViaNodemailer(to: string, name: string) {
  const nodemailer = (await import('nodemailer')).default;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  await transporter.sendMail({
    from: `"Captanova" <${process.env.SMTP_USER}>`,
    to,
    subject: 'Your Free Mindset Audit — Captanova',
    text: `Hi ${name},\n\nThank you for joining Captanova. Your Mindset Audit is on its way.\n\nIn the meantime, explore our programs:\nhttps://captanova.in/programs\n\nThe Captanova Team`,
  });
}

// ─── Google Sheets (uncomment when googleapis is installed) ───────────────────

async function saveToSheets(data: Record<string, string>) {
  /* 
  const { google } = await import('googleapis');
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const sheets = google.sheets({ version: 'v4', auth });
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    range: 'Leads!A:G',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[
        new Date().toISOString(),
        data.name, data.email, data.phone || '',
        data.source || '', data.message || '', data.interest || ''
      ]],
    },
  });
  */
  // In production, replace with your real CRM/DB call
  console.log('[Lead saved]', data);
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone = '', source = 'direct', message = '', interest = '' } = body;

    // Validate
    const errors = validateLeadForm({ name, email, phone, source, message });
    if (errors.length > 0) {
      return NextResponse.json({ error: errors[0].message, errors }, { status: 400 });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    // Save (CRM / Sheets)
    await saveToSheets({ name: cleanName, email: cleanEmail, phone, source, message, interest });

    // Send confirmation email — try Resend first, fallback to nodemailer
    try {
      const hasResend = process.env.RESEND_API_KEY && !process.env.RESEND_API_KEY.includes('PLACEHOLDER');
      const hasSmtp = process.env.SMTP_USER && !process.env.SMTP_USER.includes('your@');

      if (hasResend) {
        await sendViaResend(cleanEmail, cleanName, source);
      } else if (hasSmtp) {
        await sendViaNodemailer(cleanEmail, cleanName);
      } else {
        console.warn('[Email] No email provider configured. Skipping confirmation email.');
      }
    } catch (emailErr) {
      // Don't fail the whole request if email fails
      console.error('[Email error]', emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Lead API error]', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
