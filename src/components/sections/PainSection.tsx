export default function PainSection() {
  const pains = [
    {
      number: '01',
      title: 'You work hard, but stay stuck',
      body: 'You put in the hours. You read the books. Yet the results never match the effort. You know you are capable of more — but cannot seem to break through.',
    },
    {
      number: '02',
      title: 'Your mind is your biggest enemy',
      body: 'Self-doubt shows up the moment things get hard. Imposter syndrome kills your confidence right when you need it most. You are constantly at war with yourself.',
    },
    {
      number: '03',
      title: 'You lack clarity and direction',
      body: 'Too many ideas, too many goals, zero focus. You start strong and fade out. You wake up busy but go to bed feeling like you went nowhere.',
    },
    {
      number: '04',
      title: 'Motivation always disappears',
      body: 'You get fired up, then crash back into old patterns by Tuesday. Every productivity hack, every system — none of them stick for more than a few weeks.',
    },
    {
      number: '05',
      title: 'You are playing small without realising it',
      body: 'The life you are living is a fraction of what you are capable of. Deep down you know this — and that gap haunts you every single day.',
    },
    {
      number: '06',
      title: 'Nobody around you gets it',
      body: 'Your environment does not match your ambition. The people closest to you do not share your hunger for growth, and it is slowly dimming your fire.',
    },
  ];

  return (
    <section className="py-32 bg-obsidian relative overflow-hidden">
      {/* Large watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(8rem, 22vw, 20rem)',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.012)',
          whiteSpace: 'nowrap',
        }}
      >
        STRUGGLE
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="mb-20 reveal">
          <div className="section-label mb-5">The Reality Check</div>
          <h2 className="section-heading mb-6">
            Sound familiar?
            <br />
            <em style={{ color: 'rgba(240,237,232,0.38)' }}>You are not alone.</em>
          </h2>
          <p className="body-lg max-w-lg" style={{ color: 'rgba(240,237,232,0.42)' }}>
            These are the invisible walls keeping brilliant people from building brilliant lives.
            We have helped thousands break through every single one.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/[0.05]">
          {pains.map((p, i) => (
            <div
              key={p.number}
              className={`pain-card reveal group cursor-default ${
                i % 3 !== 2 ? 'lg:border-r border-white/[0.05]' : ''
              } ${i < 3 ? 'border-b border-white/[0.05]' : ''}`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="section-label mb-4" style={{ color: 'rgba(201,168,76,0.45)' }}>
                {p.number}
              </div>
              <h3
                className="card-heading mb-4 group-hover:text-gold transition-colors duration-300"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.35rem' }}
              >
                {p.title}
              </h3>
              <p className="body-md" style={{ color: 'rgba(240,237,232,0.42)' }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bridge */}
        <div className="mt-24 text-center reveal">
          <div className="gold-divider max-w-sm mx-auto mb-12" />
          <p
            className="font-display italic"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              color: 'rgba(240,237,232,0.55)',
              lineHeight: 1.4,
            }}
          >
            The problem is not who you are.
            <br />
            <span style={{ color: 'var(--off-white)' }}>
              It is the system you are running on.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
