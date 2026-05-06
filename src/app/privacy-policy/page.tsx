import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Privacy Policy' };

const sections = [
  { title: '1. Information We Collect', body: 'We collect information you provide directly — such as your name, email address, phone number, and payment details when you register for programs or submit forms on our website. We also collect usage data through cookies and analytics tools to improve our services.' },
  { title: '2. How We Use Your Information', body: 'We use the information we collect to process payments, deliver programs, send transactional and marketing emails (with your consent), respond to inquiries, and improve our website and offerings.' },
  { title: '3. Payment Data', body: "All payments are processed through Razorpay, a PCI-DSS compliant payment gateway. We do not store your card details on our servers. Please review Razorpay's privacy policy for details on how payment data is handled." },
  { title: '4. Cookies', body: 'We use cookies and similar tracking technologies to track activity on our website. We use the Meta Pixel to measure advertising effectiveness and Google Analytics for site analytics. You can opt out of cookies through your browser settings.' },
  { title: '5. Data Sharing', body: 'We do not sell your personal data. We may share your information with trusted third-party service providers strictly for the purpose of operating our business. We will disclose information if required by law.' },
  { title: '6. Data Security', body: 'We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.' },
  { title: '7. Your Rights', body: 'You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at hello@captanova.in.' },
  { title: '8. Changes to This Policy', body: 'We may update this Privacy Policy from time to time. We will notify you of significant changes by email or by posting a notice on our website.' },
  { title: '9. Contact Us', body: 'If you have any questions about this Privacy Policy, please contact us at hello@captanova.in.' },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-40 pb-28 bg-obsidian">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="section-label mb-6">Legal</div>
        <h1 className="font-display font-light text-off-white mb-4"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: '0.92rem', color: 'rgba(240,237,232,0.28)', marginBottom: '3rem' }}>Last updated: January 1, 2025</p>
        <div className="gold-divider mb-12" />
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display font-light text-off-white mb-4"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem' }}>
                {s.title}
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'rgba(240,237,232,0.50)', lineHeight: 1.85 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
