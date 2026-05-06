import { clsx } from 'clsx';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  withLine?: boolean;
}

export default function SectionLabel({ children, className, withLine }: SectionLabelProps) {
  return (
    <div className={clsx('flex items-center gap-3', className)}>
      {withLine && <span className="w-6 h-px bg-gold/50" />}
      <span className="section-label">{children}</span>
      {withLine && <span className="w-6 h-px bg-gold/50" />}
    </div>
  );
}
