import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputRootProps {
  children: ReactNode
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface InputIconProps {
  children: ReactNode
}

function InputRoot(props: InputRootProps) {
  return (
    <div className={
      `flex items-center w-full h-12 px-3 py-4 gap-3 rounded  
      bg-gray-800 focus-within:ring-2 ring-cyan-300`
    }>
      {props.children}
    </div>
  )
}

InputRoot.displayName = 'Input.Root';

function InputContent(props: InputProps) {
  return (
    <input 
      className={
        `flex-1 text-xs text-gray-100 bg-transparent
        placeholder:text-gray-400 outline-none`
      }
      {...props}
    />
  )
}

InputContent.displayName = 'Input.Content';

function InputIcon(props: InputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  )
}

InputIcon.displayName = 'Input.Icon';

export const Input = {
  Root: InputRoot,
  Content:InputContent,
  Icon: InputIcon
}