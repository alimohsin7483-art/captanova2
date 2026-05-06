import Link from 'next/link';
import { getCorePrograms, getMiniPrograms } from '@/lib/programs';

export default function ProgramsOverview() {
  const core = getCorePrograms();
  const mini = getMiniPrograms().slice(0, 3);

  return (
    <section id="programs-overview" className="py-32 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="section-label mb-6">Programs</div>
          <h2
            className="font-display font-light text-off-white mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
          >
            Choose your <em className="gold-text">path</em>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.8, maxWidth: '540px', margin: '0 auto' }}>
            Whether you are beginning your transformation or accelerating an already-ambitious life —
            there is a program built for exactly where you are.
          </p>
        </div>

        {/* Core Programs */}
        <div className="mb-4 reveal">
          <div className="section-label mb-10">Core Programs — Premium Transformation</div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {core.map((p, i) => (
            <div
              key={p.id}
              className={`card-dark relative overflow-hidden group flex flex-col ${p.featured ? 'ring-1 ring-gold/25' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {p.badge && (
                <div className="absolute top-0 right-0 bg-gold text-obsidian px-5 py-2 font-medium"
                  style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  {p.badge}
                </div>
              )}
              <div className="p-10 flex flex-col flex-1">
                <div className="section-label mb-5" style={{ color: 'rgba(201,168,76,0.6)' }}>
                  {p.duration} · {p.format.split('+')[0].trim()}
                </div>
                <h3
                  className="font-display font-light text-off-white mb-4 group-hover:text-gold transition-colors duration-300"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', lineHeight: 1.1 }}
                >
                  {p.name}
                </h3>
                <p style={{ fontSize: '1.05rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.75, marginBottom: '1.75rem', fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif' }}>
                  {p.tagline}
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-10 flex-1">
                  {p.benefits.slice(0, 4).map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="text-gold flex-shrink-0 mt-0.5">—</span>
                      <span style={{ fontSize: '1rem', color: 'rgba(240,237,232,0.55)', lineHeight: 1.65 }}>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="gold-divider mb-7" />
                <div className="flex items-end justify-between">
                  <div>
                    {p.originalPrice && (
                      <div style={{ fontSize: '0.9rem', color: 'rgba(240,237,232,0.25)', textDecoration: 'line-through', marginBottom: '4px' }}>
                        ₹{p.originalPrice.toLocaleString('en-IN')}
                      </div>
                    )}
                    <div
                      className="font-display font-light text-off-white"
                      style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.4rem' }}
                    >
                      ₹{p.price.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <Link href={`/programs/${p.slug}`} className="btn-gold">
                    View Program
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Mini Programs */}
        <div className="mb-4 reveal">
          <div className="section-label mb-10">Mini Programs — Quick Focused Wins</div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {mini.map((p, i) => (
            <div
              key={p.id}
              className="card-dark group relative overflow-hidden flex flex-col"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="p-8 flex flex-col flex-1">
                <div className="section-label mb-5" style={{ color: 'rgba(201,168,76,0.55)' }}>{p.duration}</div>
                <h3
                  className="font-display font-light text-off-white mb-3 group-hover:text-gold transition-colors duration-300"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.7rem', lineHeight: 1.15 }}
                >
                  {p.name}
                </h3>
                <p style={{ fontSize: '0.97rem', color: 'rgba(240,237,232,0.42)', lineHeight: 1.7, marginBottom: '1.5rem', fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif' }}>
                  {p.tagline}
                </p>
                <div className="gold-divider mb-6 mt-auto" />
                <div className="flex items-end justify-between">
                  <div>
                    {p.originalPrice && (
                      <div style={{ fontSize: '0.85rem', color: 'rgba(240,237,232,0.22)', textDecoration: 'line-through', marginBottom: '3px' }}>
                        ₹{p.originalPrice.toLocaleString('en-IN')}
                      </div>
                    )}
                    <div
                      className="font-display font-light text-off-white"
                      style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.9rem' }}
                    >
                      ₹{p.price.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <Link href={`/programs/${p.slug}`} className="btn-outline" style={{ fontSize: '0.72rem', padding: '0.7rem 1.4rem' }}>
                    Explore
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gold/50 group-hover:w-full transition-all duration-600" />
            </div>
          ))}
        </div>

        <div className="text-center reveal">
          <Link href="/programs" className="btn-outline">View All Programs</Link>
        </div>
      </div>
    </section>
  );
}
