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
  typography: {
    fontFamily: [
      "Helvetica Neue",
      DM_Serif_Normal.style.fontFamily,
      DM_Serif_Italic.style.fontFamily,
    ].join(","),
  },
});
theme = responsiveFontSizes(theme)
export default function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
