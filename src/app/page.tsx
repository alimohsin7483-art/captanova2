import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Captanova — Unlock Your Full Potential',
  description:
    'Premium mindset coaching programs that systematically reprogram your identity, install elite habits, and unlock the highest version of yourself. Join 2,400+ students.',
};

export default function HomePage() {
  return <HomePageClient />;
}
