import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

const Button = React.memo<ButtonProps>(({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  const buttonClasses = `button ${disabled ? 'button--disabled' : ''} ${className}`.trim();

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
