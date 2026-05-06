'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gold text-obsidian py-2 px-6 flex items-center justify-center gap-4">
      <p className="text-[0.7rem] tracking-[0.15em] uppercase font-medium text-center">
        <span className="opacity-70">Limited spots open —</span>{' '}
        <Link href="/programs" className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity">
          Full Potential Blueprint now 50% off →
        </Link>
      </p>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity"
        aria-label="Close announcement"
      >
        <X size={14} />
      </button>
    </div>
  );
}
