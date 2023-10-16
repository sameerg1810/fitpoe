import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#6E7E91",
          200: "#4E5D6B",
          300: "#36445A",
          400: "#263545",
          500: "#172833",
          600: "#0D1D2D",
          700: "#000A14",
          800: "#00070D",
          900: "#000209",
        },
        primary: {
          100: "#184A6B",
          200: "#0D344E",
          300: "#082135",
          400: "#04121E",
          500: "#00070A",
          600: "#000608",
          700: "#000304",
          800: "#000202",
          900: "#000101",
        },
        greenAccent: {
          100: "#EEF4F4",
          200: "#CAD6D5",
          300: "#A5B9B9",
          400: "#7F9D9D",
          500: "#5A8181",
          600: "#416262",
          700: "#294343",
          800: "#0F2525",
          900: "#000B0B",
        },
        redAccent: {
          100: "#F7D9D8",
          200: "#F1ADA9",
          300: "#EB8181",
          400: "#E55559",
          500: "#DB2A30",
          600: "#AC2126",
          700: "#7D181B",
          800: "#4D0E10",
          900: "#1E0404",
        },
        blueAccent: {
          100: "#E9F5FB",
          200: "#B9E2F4",
          300: "#89CEF0",
          400: "#5ABBF0",
          500: "#2BA8F0",
          600: "#1394CC",
          700: "#0B6B96",
          800: "#064B68",
          900: "#032635",
        },
      }
    : {
        grey: {
          100: "#F0F5F8",
          200: "#D8E5ED",
          300: "#C1D5E2",
          400: "#86A6B0",
          500: "#627D89",
          600: "#1A2A32",
          700: "#132022",
          800: "#0F181D",
          900: "#000204",
        },
        primary: {
          100: "#E9F5FB",
          200: "#B9E2F4",
          300: "#89CEF0",
          400: "#5ABBF0",
          500: "#2BA8F0",
          600: "#1B8DBB",
          700: "#14687F",
          800: "#0E4C4F",
          900: "#083031",
        },
        greenAccent: {
          100: "#F5E6F0",
          200: "#E0B4D8",
          300: "#CC84C1",
          400: "#B753A9",
          500: "#A02291",
          600: "#801C72",
          700: "#601651",
          800: "#3F1031",
          900: "#200710",
        },
        redAccent: {
          100: "#F7D9D8",
          200: "#F1ADA9",
          300: "#EB8181",
          400: "#E55559",
          500: "#DB2A30",
          600: "#AC2126",
          700: "#7D181B",
          800: "#4D0E10",
          900: "#1E0404",
        },
        blueAccent: {
          100: "#E9F5FB",
          200: "#B9E2F4",
          300: "#89CEF0",
          400: "#5ABBF0",
          500: "#2BA8F0",
          600: "#1B8DBB",
          700: "#14687F",
          800: "#0E4C4F",
          900: "#083031",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      primary: {
        main: colors.primary[300],
      },
      secondary: {
        main: colors.greenAccent[700],
      },
      background: {
        default: colors.grey[100],
      },
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
