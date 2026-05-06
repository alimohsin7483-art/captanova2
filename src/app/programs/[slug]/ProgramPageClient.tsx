'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Shield, Clock, Zap, Users } from 'lucide-react';
import LeadForm from '@/components/ui/LeadForm';
import { trackInitiateCheckout, trackPurchase, trackViewContent } from '@/lib/analytics';
import type { Program } from '@/lib/programs';

interface Props { program: Program }

const S = {
  body:     { fontSize: '1.08rem', color: 'rgba(240,237,232,0.52)', lineHeight: 1.85, fontWeight: 400 as const },
  benefit:  { fontSize: '1rem',    color: 'rgba(240,237,232,0.60)', lineHeight: 1.65, fontWeight: 400 as const },
  small:    { fontSize: '0.88rem', color: 'rgba(240,237,232,0.32)', lineHeight: 1.6 },
  label:    { fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase' as const },
  modTitle: { fontSize: '1rem',    color: 'rgba(240,237,232,0.75)', lineHeight: 1.5, fontWeight: 400 as const },
  modBody:  { fontSize: '1rem',    color: 'rgba(240,237,232,0.46)', lineHeight: 1.78, fontWeight: 400 as const },
};

const trustPoints = [
  { icon: Shield, label: '7-Day Money Back' },
  { icon: Clock,  label: 'Lifetime Access'  },
  { icon: Zap,    label: 'Instant Delivery' },
  { icon: Users,  label: '2,400+ Students'  },
];

export default function ProgramPageClient({ program }: Props) {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [paying, setPaying] = useState(false);
  const [tab, setTab] = useState<'overview' | 'modules' | 'faq'>('overview');

  useEffect(() => { trackViewContent(program.name); }, [program.name]);

  const handleBuy = async () => {
    setPaying(true);
    trackInitiateCheckout(program.name, program.price);
    try {
      const res = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ programId: program.id, amount: program.price }),
      });
      if (!res.ok) throw new Error('Order creation failed');
      const data = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_PLACEHOLDER',
        amount: data.amount,
        currency: data.currency || 'INR',
        name: 'Captanova',
        description: program.name,
        order_id: data.orderId,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        handler: async (response: any) => {
          const verify = await fetch('/api/payment/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...response, programId: program.id }),
          });
          const vData = await verify.json();
          if (vData.success) {
            trackPurchase(program.name, program.price);
            window.location.href = `/payment/success?program=${encodeURIComponent(program.name)}`;
          } else {
            window.location.href = '/payment/failure';
          }
        },
        prefill: { name: '', email: '', contact: '' },
        theme: { color: '#C9A84C' },
        modal: { ondismiss: () => setPaying(false) },
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch {
      alert('Could not initiate payment. Please try again or contact support.');
      setPaying(false);
    }
  };

  const discount = program.originalPrice ? Math.round((1 - program.price / program.originalPrice) * 100) : 0;

  const tabFaqs = [
    { q: 'Is this right for me?', a: 'If you feel stuck below your potential, constantly second-guessing yourself, or you know you are capable of more — yes. This is for serious individuals ready to do the real work.' },
    { q: 'How long do I have access?', a: 'Lifetime. Go through the material at your own pace and revisit any module at any time, forever.' },
    { q: 'What if it does not work for me?', a: 'Full 7-day money-back guarantee. Engage with the material, and if it is not a fit — email us for a complete refund. No questions asked.' },
    { q: 'How much time per day?', a: `${program.category === 'core' ? '30–60' : '15–20'} minutes per day. The real transformation happens as you apply the concepts throughout your daily life.` },
    { q: 'Is this like other mindset courses?', a: "No. Most courses give you information. This program rewires your identity and installs systems — the difference between temporary motivation and permanent change." },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-44 pb-16 bg-obsidian relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 55% 65% at 75% 40%, rgba(201,168,76,0.07) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-12">
            <Link href="/programs" className="section-label hover:text-gold transition-colors" style={{ color: 'rgba(240,237,232,0.28)' }}>
              Programs
            </Link>
            <span style={{ color: 'rgba(240,237,232,0.15)' }}>/</span>
            <span className="section-label" style={{ color: 'rgba(240,237,232,0.55)' }}>{program.name}</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-start">
            {/* Left */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-7">
                <span style={{ ...S.label, background: 'rgba(201,168,76,0.1)', color: 'rgba(201,168,76,0.8)', padding: '5px 14px' }}>
                  {program.category === 'core' ? 'Core Program' : 'Mini Program'}
                </span>
                {program.badge && (
                  <span style={{ ...S.label, background: 'var(--gold)', color: '#090909', padding: '5px 14px', fontWeight: 600 }}>
                    {program.badge}
                  </span>
                )}
                {discount > 0 && (
                  <span style={{ ...S.label, border: '1px solid rgba(201,168,76,0.35)', color: 'rgba(201,168,76,0.75)', padding: '5px 14px' }}>
                    {discount}% off — Limited time
                  </span>
                )}
              </div>

              <h1 className="font-display font-light text-off-white mb-5"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: 0.98 }}>
                {program.name}
              </h1>
              <p className="font-display italic mb-8"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.15rem, 2vw, 1.45rem)', color: 'rgba(201,168,76,0.72)', lineHeight: 1.5 }}>
                {program.tagline}
              </p>
              <p style={{ ...S.body, maxWidth: '640px', marginBottom: '2.5rem' }}>
                {program.description}
              </p>

              {/* Quick info */}
              <div className="flex flex-wrap gap-8 mb-12">
                {[
                  { label: 'Duration', value: program.duration },
                  { label: 'Format',   value: program.format  },
                  { label: 'Modules',  value: `${program.modules.length} modules` },
                ].map((info) => (
                  <div key={info.label}>
                    <div className="section-label mb-1" style={{ color: 'rgba(201,168,76,0.55)', fontSize: '0.62rem' }}>{info.label}</div>
                    <div style={{ fontSize: '1.05rem', color: 'rgba(240,237,232,0.72)' }}>{info.value}</div>
                  </div>
                ))}
              </div>

              {/* Mobile pricing card */}
              <div className="lg:hidden mb-14">
                <PricingCard program={program} discount={discount} paying={paying} onBuy={handleBuy} />
              </div>

              {/* Tabs */}
              <div className="flex border-b border-white/[0.07] mb-10">
                {(['overview', 'modules', 'faq'] as const).map((t) => (
                  <button key={t} onClick={() => setTab(t)}
                    className="capitalize border-b-2 -mb-px transition-all duration-200"
                    style={{
                      padding: '0.85rem 1.5rem',
                      fontSize: '0.82rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontFamily: 'DM Mono, monospace',
                      borderBottomColor: tab === t ? 'var(--gold)' : 'transparent',
                      color: tab === t ? 'var(--gold)' : 'rgba(240,237,232,0.35)',
                    }}>
                    {t}
                  </button>
                ))}
              </div>

              {/* Tab: Overview */}
              {tab === 'overview' && (
                <div>
                  <h2 className="font-display font-light text-off-white mb-8"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem' }}>
                    What you will walk away with
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {program.benefits.map((b) => (
                      <div key={b} className="flex items-start gap-3 p-5 border border-white/[0.05] hover:border-gold/20 transition-colors duration-200">
                        <span className="text-gold flex-shrink-0 mt-0.5 text-sm">✓</span>
                        <span style={S.benefit}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Modules */}
              {tab === 'modules' && (
                <div>
                  <h2 className="font-display font-light text-off-white mb-8"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem' }}>
                    {program.modules.length} Modules. No fluff.
                  </h2>
                  <div className="divide-y divide-white/[0.06] border border-white/[0.06]">
                    {program.modules.map((mod, i) => (
                      <div key={i}>
                        <button onClick={() => setOpenModule(openModule === i ? null : i)}
                          className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.015] transition-colors group">
                          <div className="flex items-center gap-4">
                            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', color: 'rgba(201,168,76,0.4)', width: '1.5rem', flexShrink: 0 }}>
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span style={{ ...S.modTitle, color: openModule === i ? 'var(--gold)' : 'rgba(240,237,232,0.72)' }}>
                              {mod.title}
                            </span>
                          </div>
                          <ChevronDown size={17}
                            style={{ flexShrink: 0, marginLeft: '1rem', color: 'rgba(240,237,232,0.22)', transition: 'transform 0.3s', transform: openModule === i ? 'rotate(180deg)' : 'none' }} />
                        </button>
                        <div className={`accordion-content ${openModule === i ? 'open' : ''}`}>
                          <p className="px-5 pb-6" style={{ paddingLeft: 'calc(1.5rem + 1rem + 1.25rem)', ...S.modBody }}>
                            {mod.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: FAQ */}
              {tab === 'faq' && (
                <div className="divide-y divide-white/[0.06]">
                  {tabFaqs.map((f, i) => (
                    <div key={i}>
                      <button onClick={() => setOpenModule(openModule === 100 + i ? null : 100 + i)}
                        className="w-full flex items-start justify-between gap-4 py-6 text-left group">
                        <span className="font-display font-light transition-colors duration-200"
                          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', lineHeight: 1.45, color: openModule === 100 + i ? 'var(--gold)' : 'rgba(240,237,232,0.80)' }}>
                          {f.q}
                        </span>
                        <ChevronDown size={17} style={{ flexShrink: 0, marginTop: '4px', color: 'rgba(240,237,232,0.22)', transition: 'transform 0.3s', transform: openModule === 100 + i ? 'rotate(180deg)' : 'none' }} />
                      </button>
                      <div className={`accordion-content ${openModule === 100 + i ? 'open' : ''}`}>
                        <p className="pb-6" style={S.modBody}>{f.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right — sticky pricing (desktop) */}
            <div className="hidden lg:block sticky top-28">
              <PricingCard program={program} discount={discount} paying={paying} onBuy={handleBuy} />
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-20 border-t border-white/[0.04]" style={{ background: '#040404' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="font-display font-light text-off-white text-center mb-14"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
            What students say about <em className="gold-text">{program.name}</em>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Arjun M.', role: 'Startup Founder', text: `${program.name} completely changed how I operate. The shift was immediate and it has compounded every single week since. Worth every rupee.` },
              { name: 'Priya S.', role: 'Senior Manager', text: "I have tried everything. Nothing worked until this. The system is so well-designed that results feel almost inevitable when you follow it." },
            ].map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="flex gap-1 mb-5 relative z-10">
                  {Array.from({ length: 5 }).map((_, j) => <span key={j} className="text-gold">★</span>)}
                </div>
                <p className="relative z-10 mb-6" style={{ fontSize: '1.05rem', color: 'rgba(240,237,232,0.60)', lineHeight: 1.82 }}>
                  {t.text}
                </p>
                <div className="relative z-10">
                  <div style={{ fontSize: '1rem', color: 'var(--off-white)', fontWeight: 500 }}>{t.name}</div>
                  <div style={{ fontSize: '0.88rem', color: 'rgba(240,237,232,0.35)', marginTop: '2px' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-obsidian border-t border-white/[0.04]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="section-label mb-6">The Decision</div>
          <h2 className="font-display font-light text-off-white mb-6 leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}>
            Your highest self is
            <br /><em className="gold-text">one decision away.</em>
          </h2>
          <p style={{ ...S.body, maxWidth: '400px', margin: '0 auto 2.5rem' }}>
            Every day you wait is another day operating at a fraction of your capacity.
          </p>
          <button onClick={handleBuy} disabled={paying}
            className="btn-gold animate-glow-pulse mx-auto flex items-center gap-2 disabled:opacity-50">
            {paying && <span className="w-4 h-4 border border-obsidian/30 border-t-transparent rounded-full animate-spin" />}
            Enroll in {program.name} — ₹{program.price.toLocaleString('en-IN')}
          </button>
          <p style={{ fontSize: '0.85rem', color: 'rgba(240,237,232,0.22)', marginTop: '1.25rem' }}>
            Secure checkout · 7-day money back guarantee
          </p>
        </div>
      </section>
    </>
  );
}

// ── Pricing card ──────────────────────────────────────────────────────────────
function PricingCard({ program, discount, paying, onBuy }: { program: Program; discount: number; paying: boolean; onBuy: () => void }) {
  return (
    <div className="border border-gold/20 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, rgba(201,168,76,0.05) 0%, rgba(0,0,0,0) 60%)' }}>

      {discount > 0 && (
        <div className="bg-gold text-obsidian text-center py-3"
          style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
          {discount}% off — Limited time offer
        </div>
      )}

      <div className="p-8 md:p-9">
        {program.originalPrice && (
          <div style={{ fontSize: '0.95rem', color: 'rgba(240,237,232,0.28)', textDecoration: 'line-through', marginBottom: '4px' }}>
            ₹{program.originalPrice.toLocaleString('en-IN')}
          </div>
        )}
        <div className="font-display font-light text-off-white mb-1"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.2rem', lineHeight: 1 }}>
          ₹{program.price.toLocaleString('en-IN')}
        </div>
        {program.originalPrice && (
          <div style={{ fontSize: '0.88rem', color: 'rgba(201,168,76,0.7)', marginBottom: '1.75rem' }}>
            You save ₹{(program.originalPrice - program.price).toLocaleString('en-IN')}
          </div>
        )}

        <ul className="space-y-3 mb-8">
          {program.benefits.slice(0, 6).map((b) => (
            <li key={b} className="flex items-start gap-2.5">
              <span className="text-gold flex-shrink-0 mt-0.5 text-sm">✓</span>
              <span style={{ fontSize: '0.97rem', color: 'rgba(240,237,232,0.58)', lineHeight: 1.6 }}>{b}</span>
            </li>
          ))}
        </ul>

        <button onClick={onBuy} disabled={paying}
          className="btn-gold w-full flex items-center justify-center gap-2 mb-5 disabled:opacity-50"
          style={{ padding: '1.1rem 2rem' }}>
          {paying && <span className="w-4 h-4 border border-obsidian/30 border-t-transparent rounded-full animate-spin" />}
          Enroll Now — Secure Checkout
        </button>

        {/* Trust row */}
        <div className="grid grid-cols-2 gap-y-2.5 gap-x-2">
          {trustPoints.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2" style={{ fontSize: '0.82rem', color: 'rgba(240,237,232,0.28)' }}>
              <Icon size={12} style={{ color: 'rgba(201,168,76,0.45)', flexShrink: 0 }} />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Embedded lead form for fence-sitters */}
      <div className="border-t border-white/[0.06] p-8 md:p-9">
        <p style={{ fontSize: '0.82rem', color: 'rgba(240,237,232,0.30)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Not ready? Get the free audit first
        </p>
        <LeadForm source={`program_page_${program.slug}`} ctaLabel="Get Free Audit" showPhone={false} compact />
      </div>
    </div>
  );
}
