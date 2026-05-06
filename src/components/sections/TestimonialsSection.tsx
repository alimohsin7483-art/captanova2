const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'Startup Founder, Mumbai',
    program: 'Full Potential Blueprint',
    rating: 5,
    text: 'I went from completely overwhelmed and second-guessing every decision to running my company with absolute clarity. The identity module alone was worth 10x the investment. Captanova changed the trajectory of my entire life.',
  },
  {
    name: 'Priya Sharma',
    role: 'Senior Manager, Bangalore',
    program: 'Mindset Domination System',
    rating: 5,
    text: 'I have done Tony Robbins, read every self-help book. Nothing actually stuck until Captanova. The system is so practical, so deep, and so well-structured. I finished 3 months ago and I am still compounding.',
  },
  {
    name: 'Karan Verma',
    role: 'Fitness Coach, Delhi',
    program: 'Full Potential Blueprint',
    rating: 5,
    text: 'The discipline module destroyed every excuse I had. I now wake at 5 AM without an alarm, my business has grown 3x, and my relationships have never been better. The most important investment I have ever made.',
  },
  {
    name: 'Sneha Iyer',
    role: 'Doctor & Entrepreneur, Chennai',
    program: 'The Clarity Code',
    rating: 5,
    text: 'Finding clarity felt impossible — I was always pulled in a hundred directions. The 7-day program cut through all the noise. I finished it Sunday and built my entire 90-day roadmap. Unreal value.',
  },
  {
    name: 'Rahul Pandey',
    role: 'Marketing Director, Pune',
    program: 'Mindset Domination System',
    rating: 5,
    text: 'The pressure protocol is something every professional needs. I used to crumble under high-stakes situations. Now I actually perform better when the pressure is highest. My entire team has noticed the shift.',
  },
  {
    name: 'Ananya Das',
    role: 'MBA Student, Hyderabad',
    program: 'Confidence Accelerator',
    rating: 5,
    text: 'I was the quietest person in every room. 14 days later I presented to a 200-person conference with zero anxiety. My confidence is not just different — my entire presence has elevated.',
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #060606 0%, #090909 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="section-label mb-5">Social Proof</div>
          <h2 className="section-heading mb-5">
            Real people.
            <br />
            <em className="gold-text">Real results.</em>
          </h2>
          <p className="body-lg mx-auto max-w-md" style={{ color: 'rgba(240,237,232,0.40)' }}>
            Over 2,400 students across 18 countries have gone through our programs.
            Here is what they say.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="testimonial-card reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5 relative z-10">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-gold" style={{ fontSize: '1rem' }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p
                className="relative z-10 mb-7"
                style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.97rem',
                  lineHeight: 1.78,
                  color: 'rgba(240,237,232,0.62)',
                  fontWeight: 400,
                }}
              >
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-end justify-between relative z-10">
                <div>
                  <div
                    className="font-medium"
                    style={{ fontSize: '0.95rem', color: 'var(--off-white)' }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="mt-0.5"
                    style={{ fontSize: '0.83rem', color: 'rgba(240,237,232,0.35)' }}
                  >
                    {t.role}
                  </div>
                </div>
                <span className="section-label" style={{ color: 'rgba(201,168,76,0.45)', fontSize: '0.62rem' }}>
                  {t.program}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary bar */}
        <div className="mt-16 border border-white/[0.05] p-8 flex flex-col md:flex-row items-center justify-between gap-8 reveal">
          <div className="flex items-center gap-5">
            <div className="text-gold text-3xl tracking-wide">★★★★★</div>
            <div>
              <div
                className="font-display font-light"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', color: 'var(--off-white)' }}
              >
                4.9 out of 5
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(240,237,232,0.32)' }}>
                Based on 2,400+ verified students
              </div>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/[0.08]" />
          <p
            className="font-display italic text-center md:text-right max-w-sm"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.25rem',
              color: 'rgba(240,237,232,0.40)',
              lineHeight: 1.5,
            }}
          >
            &ldquo;The most impactful personal development investment I have ever made.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
