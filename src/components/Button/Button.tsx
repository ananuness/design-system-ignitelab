import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component className={clsx(
        `w-full px-4 py-3 rounded font-semibold
        text-sm text-black bg-cyan-500 
        hover:bg-cyan-300`, className)
      }
      {...props}
    >
      {children}
    </Component>
  )
}