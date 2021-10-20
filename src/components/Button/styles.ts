import { darken, lighten } from "polished";
import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from ".";

export type WrapperProps = {
  hasIcon: boolean;
  color: "primary" | "secondary" | "black";
  shadow: "medium" | "hard";
} & Pick<ButtonProps, "size" | "fullWidth" | "minimal">;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      height: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${darken(0.1, theme.palette.primary.main)};

    &:hover {
      color: ${theme.palette.common.white};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    &:disabled {
      cursor: not-allowed;
      opacity: 0.8;
      border: 1px solid ${theme.palette.common.black};
      background-color: "D8D8D8";
    }
    &:hover {
      text-decoration: none;
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    size,
    fullWidth,
    hasIcon,
    minimal,
    disabled,
    color,
    shadow,
  }) => css`
    display: inline-flex;
    align-items: center;
    font-weight: bold;
    justify-content: center;
    background: ${theme.palette[color].main};
    color: ${theme.palette.common.white};
    border: 0;
    cursor: pointer;
    border-radius: 8px;
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    transition: all 0.1s ease-in-out;
    box-shadow: ${theme.shadows[shadow]};

    &:hover {
      background: ${lighten(0.1, theme.palette[color].main)};
      text-decoration: underline;
    }

    &:active {
      transform: scale(0.98);
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${!!minimal && wrapperModifiers.minimal(theme)};
    ${disabled && wrapperModifiers.disabled(theme)};
  `}
`;
