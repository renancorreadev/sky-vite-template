import { ButtonWrapper, ButtonVariant } from './styles'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
}

export const Button = ({ children, variant = 'primary' }: ButtonProps) => {
  return <ButtonWrapper variant={variant}>{children}</ButtonWrapper>
}
