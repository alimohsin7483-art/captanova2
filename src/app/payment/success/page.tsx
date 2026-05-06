import Link from 'next/link';

interface Props { searchParams: Promise<{ program?: string }> }

export default async function PaymentSuccessPage({ searchParams }: Props) {
  const { program } = await searchParams;
  const programName = program || 'your program';

  return (
    <section className="min-h-screen bg-obsidian flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        <div className="w-20 h-20 rounded-full border border-gold/40 flex items-center justify-center mx-auto mb-10 animate-glow-pulse">
          <span className="text-gold" style={{ fontSize: '2rem' }}>✓</span>
        </div>
        <div className="section-label mb-5">Payment Confirmed</div>
        <h1 className="font-display font-light text-off-white mb-6"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', lineHeight: 1.1 }}>
          Welcome to
          <br /><em className="gold-text">Captanova.</em>
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(240,237,232,0.50)', lineHeight: 1.82, marginBottom: '1rem' }}>
          Your enrollment in{' '}
          <strong style={{ color: 'rgba(240,237,232,0.85)', fontWeight: 500 }}>{programName}</strong>{' '}
          is confirmed. Check your email for access instructions — your transformation starts now.
        </p>
        <p style={{ fontSize: '0.92rem', color: 'rgba(240,237,232,0.28)', marginBottom: '3rem', lineHeight: 1.65 }}>
          Did not receive an email? Check your spam folder or contact us at hello@captanova.in
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/programs" className="btn-gold">Explore More Programs</Link>
          <Link href="/" className="btn-outline">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}
