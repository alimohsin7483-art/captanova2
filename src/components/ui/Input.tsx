import { type InputHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="section-label text-off-white/50">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={clsx(
            'input-dark',
            error && 'border-red-400/50 focus:border-red-400',
            className
          )}
          {...props}
        />
        {error && <p className="text-red-400/80 text-[0.7rem] tracking-wide">{error}</p>}
        {hint && !error && <p className="text-off-white/20 text-[0.7rem]">{hint}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
