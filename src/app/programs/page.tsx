import type { Metadata } from 'next';
import Link from 'next/link';
import { getCorePrograms, getMiniPrograms } from '@/lib/programs';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Programs',
  description: "Explore Captanova's premium mindset coaching programs. From 8-week immersive transformations to focused 5-day sprints — find the program built for where you are.",
};

const S = {
  body: { fontSize: '1.05rem', color: 'rgba(240,237,232,0.48)', lineHeight: 1.8, fontWeight: 400 as const },
  bodyBright: { fontSize: '1rem', color: 'rgba(240,237,232,0.65)', lineHeight: 1.75, fontWeight: 400 as const },
  small: { fontSize: '0.88rem', color: 'rgba(240,237,232,0.32)', lineHeight: 1.6 },
  benefit: { fontSize: '1rem', color: 'rgba(240,237,232,0.58)', lineHeight: 1.65, fontWeight: 400 as const },
  price: { fontFamily: 'Cormorant Garamond, serif', fontSize: '2.8rem', color: 'var(--off-white)', fontWeight: 300 },
  priceSmall: { fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', color: 'var(--off-white)', fontWeight: 300 },
  label: { fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'rgba(201,168,76,0.65)' },
};

export default function ProgramsPage() {
  const core = getCorePrograms();
  const mini = getMiniPrograms();

  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-24 bg-obsidian relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <div className="section-label mb-7">All Programs</div>
          <h1
            className="font-display font-light text-off-white mb-7"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.8rem, 7vw, 6rem)', lineHeight: 1.05 }}
          >
            Every program is built
            <br />
            to <em className="gold-text">permanently change</em>
            <br />
            how you operate.
          </h1>
          <p style={{ ...S.body, maxWidth: '520px', margin: '0 auto' }}>
            Choose based on where you are, how deep you want to go,
            and how fast you need results.
          </p>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-24 bg-obsidian border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-6 mb-16">
            <div>
              <div className="section-label mb-3">Tier 01 — Deep Transformation</div>
              <h2 className="font-display font-light text-off-white"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
                Core Programs
              </h2>
            </div>
            <div className="flex-1 h-px bg-white/[0.05]" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {core.map((p, i) => (
              <div key={p.id} className="card-dark group relative overflow-hidden flex flex-col" style={{ transitionDelay: `${i * 0.1}s` }}>
                {p.featured && <div className="h-[2px] bg-gold-gradient" />}
                <div className="p-10 md:p-12 flex flex-col flex-1">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    <span style={{ ...S.label, background: 'rgba(201,168,76,0.1)', padding: '4px 12px' }}>{p.duration}</span>
                    {p.badge && (
                      <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', background: 'var(--gold)', color: '#090909', padding: '4px 12px', fontWeight: 600 }}>
                        {p.badge}
                      </span>
                    )}
                    {p.originalPrice && (
                      <span style={{ ...S.label, border: '1px solid rgba(201,168,76,0.3)', padding: '4px 12px' }}>
                        {Math.round((1 - p.price / p.originalPrice) * 100)}% off
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-light text-off-white mb-4 group-hover:text-gold transition-colors duration-300"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)', lineHeight: 1.1 }}>
                    {p.name}
                  </h3>
                  <p className="font-display italic mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', color: 'rgba(240,237,232,0.42)', lineHeight: 1.6 }}>
                    {p.tagline}
                  </p>
                  <p style={{ ...S.body, marginBottom: '1.75rem' }}>
                    {p.description.slice(0, 200)}...
                  </p>

                  <ul className="space-y-3 mb-10 flex-1">
                    {p.benefits.slice(0, 5).map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="text-gold flex-shrink-0 mt-0.5 text-sm">✓</span>
                        <span style={S.benefit}>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="gold-divider mb-8" />
                  <div className="flex items-end justify-between">
                    <div>
                      {p.originalPrice && (
                        <div style={{ fontSize: '0.95rem', color: 'rgba(240,237,232,0.25)', textDecoration: 'line-through', marginBottom: '4px' }}>
                          ₹{p.originalPrice.toLocaleString('en-IN')}
                        </div>
                      )}
                      <div style={S.price}>₹{p.price.toLocaleString('en-IN')}</div>
                      <div style={{ ...S.small, marginTop: '4px' }}>{p.format}</div>
                    </div>
                    <Link href={`/programs/${p.slug}`} className="btn-gold">Enroll Now</Link>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Programs */}
      <section className="py-24 border-t border-white/[0.04]" style={{ background: '#050505' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-6 mb-8">
            <div>
              <div className="section-label mb-3">Tier 02 — Quick Wins</div>
              <h2 className="font-display font-light text-off-white"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
                Mini Programs
              </h2>
            </div>
            <div className="flex-1 h-px bg-white/[0.05]" />
          </div>
          <p style={{ ...S.body, maxWidth: '520px', marginBottom: '3rem' }}>
            Not ready for a full program? Start here. Each mini program solves one specific challenge in 5–14 focused days.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {mini.map((p, i) => (
              <div key={p.id} className="card-dark group relative overflow-hidden flex flex-col" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="p-8 flex flex-col flex-1">
                  <div className="section-label mb-5" style={{ color: 'rgba(201,168,76,0.6)' }}>{p.duration}</div>
                  <h3 className="font-display font-light text-off-white mb-3 group-hover:text-gold transition-colors duration-300"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem', lineHeight: 1.15 }}>
                    {p.name}
                  </h3>
                  <p className="font-display italic mb-5" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', color: 'rgba(240,237,232,0.42)', lineHeight: 1.6 }}>
                    {p.tagline}
                  </p>
                  <ul className="space-y-2.5 mb-7 flex-1">
                    {p.benefits.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="text-gold/60 flex-shrink-0">—</span>
                        <span style={{ fontSize: '0.97rem', color: 'rgba(240,237,232,0.48)', lineHeight: 1.6 }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="gold-divider mb-6" />
                  <div className="flex items-end justify-between">
                    <div>
                      {p.originalPrice && (
                        <div style={{ fontSize: '0.88rem', color: 'rgba(240,237,232,0.22)', textDecoration: 'line-through', marginBottom: '3px' }}>
                          ₹{p.originalPrice.toLocaleString('en-IN')}
                        </div>
                      )}
                      <div style={S.priceSmall}>₹{p.price.toLocaleString('en-IN')}</div>
                    </div>
                    <Link href={`/programs/${p.slug}`} className="btn-outline" style={{ fontSize: '0.72rem', padding: '0.75rem 1.5rem' }}>
                      Explore →
                    </Link>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gold/50 group-hover:w-full transition-all duration-600" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Which one CTA */}
      <section className="py-20 bg-obsidian border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="section-label mb-6">Not sure which one?</div>
          <h2 className="font-display font-light text-off-white mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            Let us help you choose.
          </h2>
          <p style={{ ...S.body, maxWidth: '420px', margin: '0 auto 2.5rem' }}>
            Talk to our team on WhatsApp — we will understand exactly where you are and recommend the right program for your situation.
          </p>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919000000000'}?text=${encodeURIComponent("Hi, I want help choosing the right Captanova program.")}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-gold"
          >
            Get a Program Recommendation
          </a>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
