// ─── Shared validation utilities ─────────────────────────────────────────────

export interface ValidationError {
  field: string;
  message: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone?: string;
  source?: string;
  message?: string;
  interest?: string;
}

export function validateLeadForm(data: LeadFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Please enter your full name.' });
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.push({ field: 'email', message: 'Please enter a valid email address.' });
  }

  if (data.phone && data.phone.trim().length > 0) {
    const cleaned = data.phone.replace(/[\s\-\(\)\+]/g, '');
    if (!/^\d{7,15}$/.test(cleaned)) {
      errors.push({ field: 'phone', message: 'Please enter a valid phone number.' });
    }
  }

  if (data.message && data.message.trim().length > 2000) {
    errors.push({ field: 'message', message: 'Message must be under 2000 characters.' });
  }

  return errors;
}

export function validatePaymentRequest(data: { programId: string; amount: number }): ValidationError[] {
  const errors: ValidationError[] = [];
  if (!data.programId || typeof data.programId !== 'string') {
    errors.push({ field: 'programId', message: 'Invalid program.' });
  }
  if (!data.amount || typeof data.amount !== 'number' || data.amount < 1 || data.amount > 1000000) {
    errors.push({ field: 'amount', message: 'Invalid payment amount.' });
  }
  return errors;
}
