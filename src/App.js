import React from "react";
import {
  StylesProvider,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { colors } from "tailwindcss/defaultTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Add from "@material-ui/icons/AddRounded";
import CssBaseline from "@material-ui/core/CssBaseline";

import MuiLogo from "./components/MuiLogo";
import TailwindLogo from "./components/TailwindLogo";
import Example1 from "./Example1/Example1";
import Example1Tailwind from "./Example1/Example1.tailwind";

import "./App.css";

const createTheme = (isDark) =>
  createMuiTheme({
    palette: {
      primary: {
        main: colors.gray[700],
      },
      grey: colors.gray,
      type: isDark ? "dark" : "light",
      text: {
        primary: colors.gray[900],
        secondary: colors.gray[600],
      },
    },
    typography: {
      fontFamily: "Rubik, san-serif",
    },
  });

const logoFontSize = "clamp(72px, 128px + 10vw, 300px)";

function App() {
  const isDark = useMediaQuery("@media (prefers-color-scheme: dark)");
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={createTheme(isDark)}>
        <CssBaseline />
        <div className="app-container">
          <div className="h-screen flex justify-center items-center">
            <div>
              <div className="flex flex-col sm:flex-row items-center sm:gap-4 md:gap-8 lg:gap-12">
                <MuiLogo fontSize={logoFontSize} />
                <Add className="text-5xl md:text-6xl text-gray-600" />
                <TailwindLogo fontSize={logoFontSize} />
              </div>
              <h1
                className="mt-4 text-center font-bold text-primary-800"
                style={{ fontSize: "clamp(24px, 16px + 2vw, 48px)" }}
              >
                Material-UI feat. Tailwind
              </h1>
              <h4
                className="text-center text-primary-700"
                style={{ fontSize: "clamp(16px, 12px + 2vw, 32px)" }}
              >
                Next level of building interface.
              </h4>
            </div>
          </div>
          <div className="h-screen bg-gray-300 flex justify-center items-center">
            <div className="max-w-4xl">
              <Example1 />
              <caption className="text-sm block mt-10 text-gray-600 font-semibold">
                Pure Material-UI
              </caption>
            </div>
          </div>
          <div className="h-screen bg-gray-300 flex justify-center items-center">
            <div className="max-w-4xl">
              <Example1Tailwind />
              <caption className="text-sm block mt-10 text-gray-600 font-semibold">
                Material-UI + Tailwind
              </caption>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
