import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary' | 'black'
  shadow?: 'medium' | 'hard'
  fullWidth?: boolean
  minimal?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    icon,
    color = 'primary',
    size = 'medium',
    shadow,
    fullWidth = false,
    minimal = false,
    ...props
  },
  ref
) => (
  <S.Wrapper
    size={size}
    color={color}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    shadow={shadow}
    ref={ref}
    sty
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
