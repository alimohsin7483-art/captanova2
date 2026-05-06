import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Terms & Conditions' };

const sections = [
  { title: '1. Acceptance of Terms', body: 'By accessing or purchasing from Captanova, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access our services.' },
  { title: '2. Programs and Services', body: 'Captanova provides digital mindset coaching programs. All content is delivered digitally. You receive a non-transferable, non-exclusive license to access program materials for personal use only. Sharing, reselling, or redistributing content is strictly prohibited.' },
  { title: '3. Payment', body: 'All prices are listed in Indian Rupees (INR). Payments are processed securely via Razorpay. By completing a purchase, you authorize us to charge the listed amount. All transactions are final unless covered by our refund policy.' },
  { title: '4. Refund Policy', body: 'We offer a 7-day money-back guarantee on all programs. If you are unsatisfied within 7 days of purchase, contact us at hello@captanova.in and we will process a full refund. Refunds are not available after 7 days or if more than 50% of the program has been consumed.' },
  { title: '5. Intellectual Property', body: 'All content, materials, frameworks, and resources provided in our programs are the intellectual property of Captanova. Unauthorized reproduction, distribution, or use of any content is strictly prohibited.' },
  { title: '6. Disclaimer of Results', body: 'Testimonials and results shared on our website are individual experiences. Results are not guaranteed. Your success depends on your effort, commitment, and background.' },
  { title: '7. Limitation of Liability', body: 'To the maximum extent permitted by law, Captanova shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.' },
  { title: '8. Governing Law', body: 'These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.' },
  { title: '9. Contact', body: 'For any questions regarding these terms, contact us at hello@captanova.in.' },
];

export default function TermsPage() {
  return (
    <section className="pt-40 pb-28 bg-obsidian">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="section-label mb-6">Legal</div>
        <h1 className="font-display font-light text-off-white mb-4"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Terms &amp; Conditions
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
