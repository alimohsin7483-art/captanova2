import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'gold', size = 'md', loading, fullWidth, className, children, disabled, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center gap-2 transition-all duration-300 font-body uppercase tracking-[0.15em] disabled:opacity-50 disabled:cursor-not-allowed select-none';

    const variants = {
      gold: 'btn-gold',
      outline: 'btn-outline',
      ghost: 'bg-transparent text-off-white/60 hover:text-gold border-0 px-0',
    };

    const sizes = {
      sm: 'text-[0.65rem] py-2.5 px-5',
      md: 'text-[0.75rem] py-3.5 px-8',
      lg: 'text-[0.8rem] py-4 px-10',
    };

    // For gold/outline we let their own classes handle padding
    const sizeClass = variant === 'ghost' ? '' : sizes[size];

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={clsx(base, variants[variant], sizeClass, fullWidth && 'w-full', className)}
        {...props}
      >
        {loading && (
          <span className="w-3.5 h-3.5 border border-current border-t-transparent rounded-full animate-spin flex-shrink-0" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
