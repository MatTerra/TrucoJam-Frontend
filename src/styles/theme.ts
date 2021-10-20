import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: "4px",
  palette: {
    common: {
      black: "#222831",
      white: "#ffffff",
    },
    primary: {
      main: "#FE9084",
      contrastText: "#000C11",
    },
    secondary: {
      main: "#3AB8F0",
      contrastText: "#ffffff",
    },
    success: {
      main: "#92F069",
      contrastText: "#fff",
    },
    error: {
      main: "#F0AC5D",
      contrastText: "#fff",
    },
    auxiliary: {
      main: "#F25EE9",
      contrastText: "#fff",
    },
    black: {
      main: "#222831",
      contrastText: "#fff",
    },
  },
  font: {
    family: "Poppins, Roboto, sans-serif",
    light: 300,
    normal: 400,
    medium: 500,
    bold: 600,
    bodyFamily: "Roboto",
    sizes: {
      xxsmall: "1rem",
      xsmall: "1.2rem",
      small: "1.4rem",
      medium: "1.6rem",
      large: "1.8rem",
      xlarge: "2.0rem",
      xxlarge: "2.8rem",
      xxxlarge: "3.2rem",
      huge: "5.2rem",
    },
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
  },
  shadows: {
    soft:
      "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
    medium:
      "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
    hard:
      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
    large: "rgba(17,12,46,0.15) 0px 48px 100px 0px",
  },
};
export default theme;
