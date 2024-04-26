'use client';

import { useRouter } from 'next/navigation';

type ButtonProps = {
  children: string;
  route?: string;
  className?: string;
  variant?: 'filled' | 'outlined' | 'tonal';
};

function Button({
  children,
  route = '',
  className = '',
  variant = 'filled',
}: ButtonProps) {
  const router = useRouter();

  // Common button styles from global styles
  const baseClasses = 'btn-base-styles';

  // Variant specific styles
  const variantClasses =
    variant === 'filled'
      ? 'bg-primary text-on-primary dark:bg-primary-dark dark:text-on-primary-dark'
      : variant === 'outlined'
        ? 'border border-primary text-primary dark:border-primary-dark dark:text-primary-dark'
        : 'bg-secondary-container text-on-secondary-container dark:bg-secondary-container-dark dark:text-on-secondary-container-dark';

  // Combine all classes
  const buttonClasses = `${baseClasses} ${variantClasses} ${className}`;

  return (
    <button
      type='button'
      onClick={() => router.push(route)}
      className={buttonClasses}
    >
      {children}
    </button>
  );
}

export default Button;
