import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const baseStyles = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';

const variantStyles = {
  default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
  secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
  destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
  outline: 'text-foreground',
} as const;

type Variant = keyof typeof variantStyles;

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div 
      className={twMerge(
        baseStyles,
        variantStyles[variant],
        className
      )} 
      {...props} 
    />
  );
}

export { Badge };
