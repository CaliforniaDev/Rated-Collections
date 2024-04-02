type ButtonProps = {
  children: string;
  className?: string;
  variant?: 'filled' | 'outlined';
};

function Button({ children, className = '', variant = 'filled' }: ButtonProps) {
  // Common button styles
  const baseClasses = 'btn-base-styles';

  // Variant specific styles
  const variantClasses =
    variant === 'filled'
      ? 'bg-primary text-on-primary dark:bg-primary-dark dark:text-on-primary-dark'
      : 'border border-primary text-primary dark:border-primary-dark dark:text-primary-dark';
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${variantClasses} ${className}`;

  return <button className={buttonClasses}>{children}</button>;
}

export default Button;
