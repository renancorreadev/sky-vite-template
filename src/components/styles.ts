import styled, { css } from 'styled-components'

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

const buttonVariants: ButtonVariantsColors = {
  primary: '#0070f3',
  secondary: '#737373',
  tertiary: '#f5f5f5',
  quaternary: '#0070f3',
  danger: '#ff0000'
}

export const ButtonWrapper = styled.button<ButtonContainerProps>`
  width: 150px;
  height: 50px;
  border-radius: 5px;
  color: #fff;

  background-color: ${(props) => props.theme.primary};

  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }} */
`
