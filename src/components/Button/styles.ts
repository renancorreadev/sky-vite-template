import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary'
export type ButtonVariantsColors = {
  primary: string
  secondary: string
  tertiary: string
  quaternary: string
  danger: string
}

interface ButtonContainerProps {
  variant: ButtonVariant
  children: React.ReactNode
}

export const ButtonWrapper = styled.button<ButtonContainerProps>`
  width: 150px;
  height: 50px;
  border-radius: 5px;
  color: #fff;

  background-color: ${(props) => props.theme['green-500']};
`
