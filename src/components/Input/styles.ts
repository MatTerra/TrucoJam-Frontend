import styled, { css, DefaultTheme } from "styled-components";
import { InputProps } from ".";

type IconPositionProps = Pick<InputProps, "iconPosition"> & {
  hasIcon?: boolean;
};

type WrapperProps = Pick<InputProps, "disabled"> & { error?: boolean };

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.palette.common.white};
    border: 0.2rem solid;
    border-color: ${theme.palette.common.black};
    padding: 0 1rem;
    border-radius: 0.5rem;
    margin-top: 0.8rem;

    &:focus-within {
      box-shadow: 0 0 0.4rem ${theme.palette.primary.main};
    }
  `}
`;

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition, hasIcon }) => css`
    color: ${theme.palette.common.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${hasIcon ? theme.spacings.xsmall : 0}};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.palette.common.white};
  `}
`;

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.palette.common.black};
    order: ${iconPosition === "right" ? 1 : 0};

    & > svg {
      width: 100%;
      height: 100%;
    }
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.palette.error.main};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.palette.error.main};
    }

    ${Icon},
    ${Label} {
      color: ${theme.palette.error.main};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.palette.common.black};

      &::placeholder {
        color: currentColor;
      }
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    margin-right: ${theme.spacings.xxsmall};

    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)};
  `}
`;
