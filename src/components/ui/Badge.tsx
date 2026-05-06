import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'outline' | 'subtle';
  className?: string;
}

export default function Badge({ children, variant = 'gold', className }: BadgeProps) {
  const variants = {
    gold: 'bg-gold text-obsidian',
    outline: 'border border-gold/40 text-gold',
    subtle: 'bg-gold/10 text-gold/80',
  };

  return (
    <span
      className={clsx(
        'inline-block text-[0.6rem] tracking-[0.2em] uppercase font-body font-medium px-3 py-1',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
