'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Who are these programs designed for?',
    a: "Captanova programs are built for ambitious individuals who feel stuck below their potential — entrepreneurs, professionals, students, and anyone who knows they are capable of more but cannot break through. If you are already achieving but want to operate at an elite mental level, these programs are for you too.",
  },
  {
    q: 'I\'ve tried self-help before and it never worked. Why is this different?',
    a: "Most self-help gives you information. Captanova gives you a system. There is a critical difference between knowing what to do and having your identity, habits, and environment wired to actually do it. We do not give you motivation — we rebuild the operating system underneath your behaviour.",
  },
  {
    q: 'How much time do I need to commit per day?',
    a: "The core programs require 30–60 minutes per day. Mini programs need 15–20 minutes. The real time investment is in the integration: applying what you learn into your actual life. That happens automatically as you go about your day.",
  },
  {
    q: 'Is there a money-back guarantee?',
    a: "Yes — a full 7-day money-back guarantee on all programs. If you engage with the material for 7 days and feel it is not the right fit, email us and we will refund you completely. No questions asked.",
  },
  {
    q: 'Do I get lifetime access?',
    a: "Yes. Once enrolled, you have lifetime access to all program materials including any future updates. Revisit modules whenever you need a reset or want to go deeper.",
  },
  {
    q: 'How soon will I see results?',
    a: "Most students report noticeable shifts in clarity, confidence, and focus within the first week. Deeper identity-level changes crystallise over 3–6 weeks. Lasting transformation comes from consistent application of the systems we teach.",
  },
  {
    q: 'What if I fall behind or miss days?',
    a: "There are no strict deadlines. Go at your own pace. Many students complete a program and then revisit specific modules months later when facing new challenges.",
  },
  {
    q: 'How is Captanova different from a regular online course?',
    a: "Most online courses give you knowledge. Captanova is a transformation system. Every module is designed with one question: what needs to change at the level of identity and belief for this person to naturally live differently? We prioritise rewiring over information delivery.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 border-t border-white/[0.04]" style={{ background: '#050505' }}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="section-label mb-6">FAQ</div>
          <h2
            className="font-display font-light text-off-white mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', lineHeight: 1.08 }}
          >
            Every question
            <br />
            <em className="gold-text">answered honestly.</em>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(240,237,232,0.42)', lineHeight: 1.75, maxWidth: '420px', margin: '0 auto' }}>
            No vague promises. No marketing fluff. Just straight answers.
          </p>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-white/[0.06]">
          {faqs.map((faq, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.04}s` }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-6 py-8 text-left group"
              >
                <span
                  className="font-display font-light transition-colors duration-300"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                    lineHeight: 1.45,
                    color: open === i ? 'var(--gold)' : 'rgba(240,237,232,0.85)',
                  }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className="flex-shrink-0 mt-1 transition-all duration-300"
                  style={{ color: open === i ? 'var(--gold)' : 'rgba(240,237,232,0.22)', transform: open === i ? 'rotate(180deg)' : 'none' }}
                />
              </button>
              <div className={`accordion-content ${open === i ? 'open' : ''}`}>
                <div className="pb-8 pr-10">
                  <p style={{ fontSize: '1.05rem', color: 'rgba(240,237,232,0.52)', lineHeight: 1.82, fontWeight: 400 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-20 text-center reveal">
          <div className="gold-divider max-w-xs mx-auto mb-10" />
          <p style={{ fontSize: '1.05rem', color: 'rgba(240,237,232,0.4)', marginBottom: '1.5rem' }}>
            Still have a question?
          </p>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919000000000'}?text=${encodeURIComponent("Hi, I have a question about Captanova programs.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Ask Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
