import Link from 'next/link';

export default function Footer() {
  const programLinks = [
    { label: 'Full Potential Blueprint', href: '/programs/full-potential-blueprint' },
    { label: 'Mindset Domination System', href: '/programs/mindset-domination-system' },
    { label: 'Mini Programs', href: '/programs#mini' },
    { label: 'All Programs', href: '/programs' },
  ];

  const companyLinks = [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ];

  const linkStyle = {
    fontSize: '1rem',
    color: 'rgba(240,237,232,0.42)',
    fontWeight: 400,
    lineHeight: 1.5,
  };

  return (
    <footer className="bg-obsidian border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-2">
            <div
              className="font-display font-light tracking-[0.08em] text-off-white mb-2"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem' }}
            >
              CAPTANOVA
            </div>
            <div className="section-label mb-7" style={{ color: 'rgba(201,168,76,0.5)' }}>
              Mindset Coaching
            </div>
            <p className="max-w-sm mb-7" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(240,237,232,0.42)', fontWeight: 400 }}>
              Empowering ambitious individuals to unlock their highest potential through elite
              mindset frameworks and transformational coaching.
            </p>
            <div className="flex gap-6">
              {['Instagram', 'YouTube', 'LinkedIn'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="hover:text-gold transition-colors duration-200"
                  style={{ fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.28)' }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="section-label mb-6">Programs</h4>
            <ul className="space-y-4">
              {programLinks.map((l, i) => (
                <li key={`program-${i}`}>
                  <Link href={l.href} className="hover:text-gold transition-colors duration-200" style={linkStyle}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="section-label mb-6">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((l, i) => (
                <li key={`company-${i}`}>
                  <Link href={l.href} className="hover:text-gold transition-colors duration-200" style={linkStyle}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="gold-divider mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ fontSize: '0.88rem', color: 'rgba(240,237,232,0.25)' }}>
            © {new Date().getFullYear()} Captanova. All rights reserved.
          </p>
          <p style={{ fontSize: '0.88rem', color: 'rgba(240,237,232,0.2)' }}>
            Designed to transform. Built to last.
          </p>
        </div>
      </div>
    </footer>
  );
}
