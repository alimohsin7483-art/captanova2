'use client';

import LeadForm from '@/components/ui/LeadForm';

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919000000000';

const S = {
  body: { fontSize: '1.08rem', color: 'rgba(240,237,232,0.48)', lineHeight: 1.82, fontWeight: 400 as const },
  contactValue: { fontSize: '1.05rem', color: 'rgba(240,237,232,0.62)', transition: 'color 0.2s' },
  contactNote: { fontSize: '0.88rem', color: 'rgba(240,237,232,0.28)' },
};

export default function ContactForm() {
  return (
    <section className="pt-44 pb-32 bg-obsidian relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 20%, rgba(201,168,76,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Left — copy */}
          <div>
            <div className="section-label mb-7">Get in Touch</div>
            <h1 className="font-display font-light text-off-white mb-8 leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1.05 }}>
              Let&apos;s start your
              <br /><em className="gold-text">conversation.</em>
            </h1>
            <p style={{ ...S.body, maxWidth: '400px', marginBottom: '3rem' }}>
              Not sure which program is right for you? Have a question before enrolling?
              Our team responds to every message personally — usually within a few hours.
            </p>

            {/* Contact methods */}
            <div className="space-y-4 mb-12">
              {[
                { label: 'Email', value: 'hello@captanova.in', href: 'mailto:hello@captanova.in', note: 'Replies within 4 hours' },
                { label: 'WhatsApp', value: `+${whatsapp}`, href: `https://wa.me/${whatsapp}?text=${encodeURIComponent("Hi, I have a question about Captanova programs.")}`, note: 'Fastest response' },
                { label: 'Instagram', value: '@captanova.in', href: '#', note: 'DMs open' },
              ].map((c) => (
                <a key={c.label} href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center justify-between p-5 border border-white/[0.06] hover:border-gold/25 transition-colors duration-200 group"
                >
                  <div className="flex items-center gap-5">
                    <span className="section-label w-24">{c.label}</span>
                    <span className="group-hover:text-gold transition-colors" style={S.contactValue}>
                      {c.value}
                    </span>
                  </div>
                  <span style={S.contactNote}>{c.note}</span>
                </a>
              ))}
            </div>

            {/* Quote */}
            <div className="border border-gold/15 p-8" style={{ background: 'rgba(201,168,76,0.02)' }}>
              <p className="font-display italic font-light"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', color: 'rgba(240,237,232,0.48)', lineHeight: 1.65 }}>
                &ldquo;We respond to every message with the same depth and care we put into our programs.
                No bots. No templates. Real people.&rdquo;
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="border border-white/[0.06] p-10 md:p-12" style={{ background: 'rgba(255,255,255,0.018)' }}>
            <h2 className="font-display font-light text-off-white mb-2"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem' }}>
              Send us a message
            </h2>
            <p style={{ ...S.body, fontSize: '0.98rem', marginBottom: '2.5rem' }}>
              We will get back to you within a few hours.
            </p>
            <LeadForm
              source="contact_page"
              ctaLabel="Send Message"
              showPhone
              showMessage
              messageLabel="Your message"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
