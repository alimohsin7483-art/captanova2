import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen bg-obsidian flex items-center justify-center px-6">
      <div className="text-center">
        <div className="font-display font-light select-none pointer-events-none mb-0"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(8rem, 20vw, 16rem)', color: 'rgba(255,255,255,0.025)', lineHeight: 1 }}>
          404
        </div>
        <div className="section-label mb-5 -mt-4">Page Not Found</div>
        <h1 className="font-display font-light text-off-white mb-5"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          This page does not exist.
        </h1>
        <p style={{ fontSize: '1.08rem', color: 'rgba(240,237,232,0.42)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
          But your potential does. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-gold">Back to Home</Link>
          <Link href="/programs" className="btn-outline">View Programs</Link>
        </div>
      </div>
    </section>
  );
}
