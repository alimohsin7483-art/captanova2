import Link from 'next/link';

export default function PaymentFailurePage() {
  return (
    <section className="min-h-screen bg-obsidian flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        <div className="w-20 h-20 rounded-full border border-red-400/30 flex items-center justify-center mx-auto mb-10">
          <span style={{ color: 'rgba(248,113,113,0.6)', fontSize: '2rem' }}>✕</span>
        </div>
        <div className="section-label mb-5" style={{ color: 'rgba(248,113,113,0.5)' }}>Payment Failed</div>
        <h1 className="font-display font-light text-off-white mb-6"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
          Something went wrong.
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(240,237,232,0.50)', lineHeight: 1.82, marginBottom: '3rem' }}>
          Your payment could not be processed. No money has been deducted.
          Please try again or contact us if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/programs" className="btn-gold">Try Again</Link>
          <Link href="/contact" className="btn-outline">Contact Support</Link>
        </div>
      </div>
    </section>
  );
}
