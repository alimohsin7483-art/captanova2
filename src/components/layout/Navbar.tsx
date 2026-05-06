'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

const navLinks = [
  { label: 'Programs', href: '/programs' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed left-0 right-0 z-50 transition-all duration-500',
        // sits below announcement bar (32px) unless scrolled past it
        scrolled ? 'top-0 bg-obsidian/96 backdrop-blur-md border-b border-white/5 py-4' : 'top-8 bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex flex-col leading-none">
          <span
            className="font-display text-2xl font-light tracking-[0.08em] text-off-white group-hover:text-gold transition-colors duration-300"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            CAPTANOVA
          </span>
          <span
            className="text-[0.58rem] tracking-[0.35em] text-gold/60 font-light uppercase"
            style={{ fontFamily: 'Jost, sans-serif' }}
          >
            Mindset Coaching
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm tracking-[0.16em] uppercase font-light text-off-white/65 hover:text-gold transition-colors duration-300 group"
              style={{ fontFamily: 'Jost, sans-serif' }}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link href="/programs" className="btn-gold text-[0.75rem] py-3 px-7 inline-block">
            Begin Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-off-white hover:text-gold transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={clsx(
          'md:hidden overflow-hidden transition-all duration-300',
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="bg-obsidian/98 backdrop-blur-md border-t border-white/5 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[0.82rem] tracking-[0.16em] uppercase text-off-white/65 hover:text-gold transition-colors"
              style={{ fontFamily: 'Jost, sans-serif' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/programs"
            onClick={() => setMenuOpen(false)}
            className="btn-gold text-center mt-2"
          >
            Begin Now
          </Link>
        </div>
      </div>
    </header>
  );
}
