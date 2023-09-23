import { ReactNode } from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

import GlobalStyle from "./resets";
import { FONTS, BREAK_POINTS, COLORS } from "../theme/styles";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme: DefaultTheme = {
    fonts: FONTS,
    colors: COLORS,
    breakpoints: BREAK_POINTS,
  };

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
