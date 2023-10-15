"use client";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { DM_Serif_Display } from "next/font/google";
const DM_Serif_Normal = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const DM_Serif_Italic = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});
let theme = createTheme({
  palette: {
    primary: {
      main: '#889966'
    },
    secondary: {
      main: '#889966'
    }
  },
  typography: {

    fontFamily: [
      "Helvetica Neue",
      DM_Serif_Normal.style.fontFamily,
      DM_Serif_Italic.style.fontFamily,
    ].join(","),
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: "#BBCC77",
            borderWidth: 1,
            borderRadius: 0,
          },
          "& .MuiOutlinedInput-input": {
            borderColor: '#889966',
            paddingTop: 9,
            paddingBottom: 9,
          },
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);
export default function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
