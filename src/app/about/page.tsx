import type { Metadata } from 'next';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Captanova — the premium mindset coaching brand on a mission to help ambitious individuals unlock their full potential.',
};

const S = {
  body: { fontSize: '1.08rem', color: 'rgba(240,237,232,0.50)', lineHeight: 1.85, fontWeight: 400 as const },
  subhead: { fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.08 },
};

const values = [
  { label: 'Depth Over Hype', desc: 'We trade in real transformation, not motivational sugar. Everything we create is grounded in psychology, neuroscience, and lived experience.' },
  { label: 'Elite Standards',  desc: 'We hold our students — and ourselves — to the highest possible standard. Average is not in our vocabulary.' },
  { label: 'Permanence Over Peaks', desc: 'We are not in the business of temporary highs. We build lasting systems that compound over time.' },
  { label: 'The Long Game',    desc: 'We think in decades, not days. Every program is designed to produce change that lasts a lifetime.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-32 bg-obsidian relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 25% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="section-label mb-7">Our Story</div>
              <h1 className="font-display font-light text-off-white mb-10 leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1.05 }}>
                Born from
                <br /><em className="gold-text">personal struggle.</em>
                <br />Built for mass
                <br />transformation.
              </h1>
              <div className="space-y-6">
                {[
                  "Captanova was founded on a single conviction: that the gap between where most people are and where they could be is not a talent gap — it is a mindset gap.",
                  "Our founder spent years achieving external markers of success while feeling internally empty, anxious, and unfulfilled. Despite every productivity system, self-help book, and motivational seminar — nothing stuck.",
                  "The breakthrough came not from more information, but from a complete restructuring of identity, belief, and mental operating system.",
                  "Captanova was built to systematize that transformation — making it accessible to every ambitious individual who refuses to settle for a fraction of their potential.",
                ].map((para, i) => (
                  <p key={i} style={S.body}>{para}</p>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Mission card */}
              <div className="border border-gold/20 p-10" style={{ background: 'rgba(201,168,76,0.025)' }}>
                <div className="section-label mb-5">Our Mission</div>
                <p className="font-display italic text-off-white font-light leading-snug"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)', lineHeight: 1.5 }}>
                  &ldquo;To systematically unlock the full potential of every ambitious individual who is ready to do the real work.&rdquo;
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 border border-white/[0.05]">
                {[
                  { n: '2,400+', l: 'Students' },
                  { n: '18+',    l: 'Countries' },
                  { n: '4.9★',  l: 'Rating' },
                ].map((s, i) => (
                  <div key={s.l} className={`py-8 px-6 text-center ${i < 2 ? 'border-r border-white/[0.05]' : ''}`}>
                    <div className="font-display font-light text-off-white mb-1"
                      style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem' }}>
                      {s.n}
                    </div>
                    <div className="section-label" style={{ color: 'rgba(240,237,232,0.32)', fontSize: '0.65rem' }}>
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t border-white/[0.04]" style={{ background: '#050505' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="section-label mb-5">What We Stand For</div>
          <h2 className="font-display font-light text-off-white mb-16"
            style={S.subhead}>
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 border border-white/[0.05]">
            {values.map((v, i) => (
              <div key={v.label}
                className={`p-10 md:p-12 group hover:bg-white/[0.015] transition-colors ${i % 2 === 0 ? 'border-r border-white/[0.05]' : ''} ${i < 2 ? 'border-b border-white/[0.05]' : ''}`}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-px bg-gold/40" />
                  <h3 className="font-display font-light text-off-white group-hover:text-gold transition-colors duration-300"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem' }}>
                    {v.label}
                  </h3>
                </div>
                <p style={S.body}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
