'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const t = setTimeout(() => el.classList.add('opacity-100'), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian">

      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#090909] to-[#050505]" />

        {/* Central gold glow — centred, never overlaps text */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 65%)' }}
        />

        {/* Subtle grid — low opacity so it never competes */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)',
            backgroundSize: '100px 100px',
          }}
        />

        {/* Single right-edge accent line — far right, not crossing content */}
        <div
          className="absolute top-0 right-0 w-px h-full pointer-events-none"
          style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(201,168,76,0.18) 40%, transparent 100%)' }}
        />
      </div>

      {/* ── Content ── */}
      <div
        ref={containerRef}
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-40 pb-24 opacity-0 transition-opacity duration-1000 w-full"
      >
        <div className="flex flex-col items-center text-center">

          {/* Eyebrow */}
          <div
            className="mb-10 flex items-center gap-4 animate-fade-in"
            style={{ animationDelay: '0.15s', animationFillMode: 'both' }}
          >
            <span className="w-10 h-px bg-gold/40" />
            <span className="section-label">Premium Mindset Coaching</span>
            <span className="w-10 h-px bg-gold/40" />
          </div>

          {/* Main headline */}
          <h1
            className="hero-heading mb-8 animate-fade-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            Unlock Your
            <br />
            <span className="gold-shimmer italic">Full Potential</span>
          </h1>

          {/* Sub-headline — bigger, more readable */}
          <p
            className="animate-fade-up max-w-2xl mx-auto mb-12"
            style={{
              animationDelay: '0.55s',
              animationFillMode: 'both',
              fontSize: '1.2rem',
              lineHeight: 1.85,
              color: 'rgba(240,237,232,0.54)',
              fontWeight: 400,
              fontFamily: 'Jost, sans-serif',
            }}
          >
            Most people will live their entire life as a fraction of who they could become.
            The gap between where you are and where you want to be is not talent —
            it is the right mindset system.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '0.75s', animationFillMode: 'both' }}
          >
            <Link href="/programs" className="btn-gold animate-glow-pulse">
              Start Your Transformation
            </Link>
            <Link href="#programs-overview" className="btn-outline">
              Explore Programs
            </Link>
          </div>

          {/* Trust badges */}
          <div
            className="mt-20 flex flex-wrap justify-center gap-12 animate-fade-in"
            style={{ animationDelay: '1s', animationFillMode: 'both' }}
          >
            {[
              { label: '2,400+', sub: 'Lives Transformed' },
              { label: '94%',    sub: 'Completion Rate' },
              { label: '4.9 ★', sub: 'Average Rating' },
            ].map((b) => (
              <div key={b.label} className="flex flex-col items-center gap-2">
                <span
                  className="font-display font-light text-gold"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem' }}
                >
                  {b.label}
                </span>
                <span
                  className="section-label"
                  style={{ color: 'rgba(240,237,232,0.32)', fontSize: '0.68rem' }}
                >
                  {b.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: '1.3s', animationFillMode: 'both' }}
      >
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.2)' }}>
          Scroll
        </span>
        <div className="w-px h-10 overflow-hidden relative">
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-gold to-transparent"
            style={{ animation: 'float 2s ease-in-out infinite' }}
          />
        </div>
      </div>
    </section>
  );
}
