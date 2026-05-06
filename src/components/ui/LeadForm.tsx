'use client';

import { useState, useId } from 'react';
import { submitLead } from '@/features/leads/submitLead';
import type { LeadFormData } from '@/lib/validations';

interface LeadFormProps {
  source: string;
  ctaLabel?: string;
  showPhone?: boolean;
  showMessage?: boolean;
  messageLabel?: string;
  compact?: boolean;
  onSuccess?: () => void;
  className?: string;
}

export default function LeadForm({
  source,
  ctaLabel = 'Send Me the Free Audit',
  showPhone = true,
  showMessage = false,
  messageLabel = 'Message',
  compact = false,
  onSuccess,
  className = '',
}: LeadFormProps) {
  const uid = useId();

  const [form, setForm] = useState<LeadFormData>({ name: '', email: '', phone: '', message: '', source });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [globalError, setGlobalError] = useState('');

  const set = (field: keyof LeadFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (fieldErrors[field]) setFieldErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setGlobalError('');
    setFieldErrors({});

    const result = await submitLead(form);

    if (result.success) {
      setStatus('success');
      onSuccess?.();
    } else if (result.errors) {
      const errs: Record<string, string> = {};
      result.errors.forEach((e) => { errs[e.field] = e.message; });
      setFieldErrors(errs);
      setStatus('idle');
    } else {
      setGlobalError(result.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center mx-auto mb-6">
          <span className="text-gold text-2xl">✓</span>
        </div>
        <h3
          className="font-display font-light mb-3"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', color: 'var(--off-white)' }}
        >
          You&apos;re in.
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.7 }}>
          Check your inbox — your Mindset Audit is on its way.
          <br />Check spam if you don&apos;t see it within 5 minutes.
        </p>
      </div>
    );
  }

  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${Object.keys(fieldErrors).length > 0 ? 'rgba(248,113,113,0.4)' : 'rgba(201,168,76,0.22)'}`,
    color: 'var(--off-white)',
    fontFamily: 'Jost, sans-serif',
    fontWeight: 400,
    fontSize: '1rem',
    padding: '0.95rem 1.4rem',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    borderRadius: 0,
  };

  const labelStyle = {
    fontFamily: 'DM Mono, monospace',
    fontSize: '0.68rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase' as const,
    color: 'rgba(240,237,232,0.45)',
    display: 'block',
    marginBottom: '0.5rem',
  };

  const errorStyle = {
    fontSize: '0.8rem',
    color: 'rgba(248,113,113,0.75)',
    marginTop: '0.35rem',
  };

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`} noValidate>
        <input
          type="text" required placeholder="Your name" value={form.name}
          onChange={set('name')} className="input-dark flex-1" id={`${uid}-name`}
        />
        <input
          type="email" required placeholder="Your email" value={form.email}
          onChange={set('email')} className="input-dark flex-1" id={`${uid}-email`}
        />
        <button type="submit" disabled={status === 'loading'} className="btn-gold flex-shrink-0 flex items-center gap-2 disabled:opacity-50">
          {status === 'loading' && (
            <span className="w-3.5 h-3.5 border border-obsidian/30 border-t-transparent rounded-full animate-spin" />
          )}
          {ctaLabel}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${className}`} noValidate>

      <div>
        <label htmlFor={`${uid}-name`} style={labelStyle}>Full Name</label>
        <input
          id={`${uid}-name`} type="text" required placeholder="Your full name"
          value={form.name} onChange={set('name')} className="input-dark"
          style={fieldErrors.name ? { ...inputStyle, borderColor: 'rgba(248,113,113,0.5)' } : {}}
        />
        {fieldErrors.name && <p style={errorStyle}>{fieldErrors.name}</p>}
      </div>

      <div>
        <label htmlFor={`${uid}-email`} style={labelStyle}>Email Address</label>
        <input
          id={`${uid}-email`} type="email" required placeholder="your@email.com"
          value={form.email} onChange={set('email')} className="input-dark"
          style={fieldErrors.email ? { ...inputStyle, borderColor: 'rgba(248,113,113,0.5)' } : {}}
        />
        {fieldErrors.email && <p style={errorStyle}>{fieldErrors.email}</p>}
      </div>

      {showPhone && (
        <div>
          <label htmlFor={`${uid}-phone`} style={labelStyle}>
            Phone <span style={{ opacity: 0.45 }}>(Optional)</span>
          </label>
          <input
            id={`${uid}-phone`} type="tel" placeholder="+91 9XXXXXXXXX"
            value={form.phone} onChange={set('phone')} className="input-dark"
          />
          {fieldErrors.phone && <p style={errorStyle}>{fieldErrors.phone}</p>}
          <p style={{ fontSize: '0.78rem', color: 'rgba(240,237,232,0.22)', marginTop: '0.35rem' }}>
            We may WhatsApp you with program details
          </p>
        </div>
      )}

      {showMessage && (
        <div>
          <label htmlFor={`${uid}-message`} style={labelStyle}>{messageLabel}</label>
          <textarea
            id={`${uid}-message`}
            placeholder="Tell us about yourself and what you're looking to achieve..."
            value={form.message} onChange={set('message')} rows={4} className="input-dark"
          />
          {fieldErrors.message && <p style={errorStyle}>{fieldErrors.message}</p>}
        </div>
      )}

      {globalError && (
        <p style={{ ...errorStyle, fontSize: '0.88rem', padding: '0.75rem 1rem', background: 'rgba(248,113,113,0.06)', border: '1px solid rgba(248,113,113,0.2)' }}>
          {globalError}
        </p>
      )}

      <button
        type="submit" disabled={status === 'loading'}
        className="btn-gold w-full mt-2 flex items-center justify-center gap-2 disabled:opacity-50"
        style={{ padding: '1.1rem 2rem' }}
      >
        {status === 'loading' && (
          <span className="w-4 h-4 border border-obsidian/30 border-t-transparent rounded-full animate-spin" />
        )}
        {ctaLabel}
      </button>

      <p style={{ fontSize: '0.78rem', color: 'rgba(240,237,232,0.2)', textAlign: 'center' }}>
        No spam. No fluff. Unsubscribe anytime.
      </p>
    </form>
  );
}
