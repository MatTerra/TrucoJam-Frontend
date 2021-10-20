// styled.d.ts
import "styled-components";
interface IPalette {
  main: string;
  contrastText: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;
      success: IPalette;
      error: IPalette;
      auxiliary: IPalette;
      black: IPalette;
    };
    font: {
      family: string;
      light: number;
      normal: number;
      medium: number;
      bold: number;
      bodyFamily: string;
      sizes: {
        xxsmall: string;
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        xxxlarge: string;
        huge: string;
      };
    };
    spacings: {
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    shadows: {
      soft: string;
      medium: string;
      hard: string;
      large: string;
    };
  }
}
