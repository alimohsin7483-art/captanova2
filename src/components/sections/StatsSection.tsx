import CountUp from '@/components/ui/CountUp';

const stats = [
  { countEnd: 2400, suffix: '+', label: 'Lives Transformed', detail: 'Across 18 countries' },
  { countEnd: 94,   suffix: '%', label: 'Completion Rate',   detail: 'Industry avg is 32%' },
  { countEnd: 8,    suffix: ' Wks', label: 'To Life Change', detail: 'Flagship program' },
  { countEnd: 4.9,  suffix: '/5',  label: 'Program Rating',  detail: 'Verified reviews', decimals: 1 },
];

export default function StatsSection() {
  return (
    <section className="bg-[#060606] border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`reveal py-14 px-8 flex flex-col items-center text-center ${
                i < stats.length - 1 ? 'border-r border-white/[0.04]' : ''
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span
                className="font-display font-light text-off-white block mb-2"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.6rem, 5vw, 3.8rem)', lineHeight: 1 }}
              >
                <CountUp end={s.countEnd} suffix={s.suffix} decimals={s.decimals} />
              </span>
              <span
                className="section-label block mb-1.5"
                style={{ color: 'rgba(201,168,76,0.75)', fontSize: '0.68rem' }}
              >
                {s.label}
              </span>
              <span style={{ fontSize: '0.88rem', color: 'rgba(240,237,232,0.25)' }}>
                {s.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
