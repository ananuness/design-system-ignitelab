import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component className={
        `w-full px-3 py-4 rounded font-semibold 
        text-sm text-black bg-cyan-500 hover:bg-cyan-300`
      }
    >
      {children}
    </Component>
  )
}