import { addDecorator } from "@storybook/react";
import GlobalStyles from "../src/styles/global";
import StoryRouter from "storybook-react-router";
import { ThemeProvider } from "styled-components";
import theme from "../src/styles/theme";

addDecorator(StoryRouter());

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
