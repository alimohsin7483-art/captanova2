// ─── Lead feature: client-side submission logic ───────────────────────────────

import { validateLeadForm, type LeadFormData, type ValidationError } from '@/lib/validations';
import { trackLead } from '@/lib/analytics';

export interface SubmitLeadResult {
  success: boolean;
  errors?: ValidationError[];
  message?: string;
}

export async function submitLead(data: LeadFormData): Promise<SubmitLeadResult> {
  // Client-side validation first
  const errors = validateLeadForm(data);
  if (errors.length > 0) {
    return { success: false, errors };
  }

  try {
    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (!res.ok) {
      return { success: false, message: json.error || 'Submission failed. Please try again.' };
    }

    // Fire analytics on success
    trackLead(data.source);

    return { success: true };
  } catch {
    return { success: false, message: 'Network error. Please check your connection and try again.' };
  }
}
