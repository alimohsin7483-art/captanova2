import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Captanova team. We respond to every inquiry personally.',
};

export default function ContactPage() {
  return <ContactForm />;
}
