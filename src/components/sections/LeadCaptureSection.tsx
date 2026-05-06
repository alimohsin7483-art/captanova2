import LeadForm from '@/components/ui/LeadForm';

export default function LeadCaptureSection() {
  return (
    <section className="py-32 bg-obsidian border-t border-white/[0.04]" id="free-audit">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Left — copy */}
          <div className="reveal-left">
            <div className="section-label mb-6">Free Resource</div>
            <h2
              className="font-display font-light text-off-white mb-7 leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', lineHeight: 1.08 }}
            >
              Get the Free
              <br />
              <em className="gold-text">Mindset Audit</em>
            </h2>
            <p style={{ fontSize: '1.12rem', color: 'rgba(240,237,232,0.48)', lineHeight: 1.82, marginBottom: '2rem' }}>
              A 20-page deep-dive that reveals exactly which mental blocks are silently
              holding you back — and a precise action plan to break through each one.
            </p>

            {/* What you get */}
            <ul className="space-y-4 mb-12">
              {[
                'Your personal sabotage patterns identified',
                'A custom 30-day mindset reprogramming plan',
                'The 5 elite beliefs that separate top performers',
                'Immediate access — no waiting, no gatekeeping',
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="text-gold flex-shrink-0 mt-1">→</span>
                  <span style={{ fontSize: '1.02rem', color: 'rgba(240,237,232,0.58)', lineHeight: 1.65 }}>{item}</span>
                </li>
              ))}
            </ul>

            {/* Social proof avatars */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {['AR', 'PS', 'KV', 'SI'].map((initials) => (
                  <div
                    key={initials}
                    className="w-10 h-10 rounded-full border-2 border-obsidian bg-warm-gray flex items-center justify-center text-gold font-medium"
                    style={{ fontSize: '0.65rem' }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.95rem', color: 'rgba(240,237,232,0.35)', lineHeight: 1.55 }}>
                <span style={{ color: 'rgba(240,237,232,0.65)' }}>2,400+ students</span> already
                <br />have their audit
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal-right">
            <div
              className="border border-gold/15 p-10 md:p-12"
              style={{ background: 'linear-gradient(140deg, rgba(201,168,76,0.04) 0%, rgba(0,0,0,0) 100%)' }}
            >
              <LeadForm
                source="homepage_lead_section"
                ctaLabel="Send Me the Free Audit"
                showPhone
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
