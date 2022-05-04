import { HTMLAttributes } from 'react'

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Text / HTML to be displayed
   */
  label?:
    | React.ReactChild
    | React.ReactNode
    | React.ReactChild[]
    | React.ReactNode[]
    | string
}
export const Button = ({ label,children, ...props }: IButtonProps) => {
  return <button {...props}>{children ?? label}</button>
}
