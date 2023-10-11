import ClientThemeProvider from "@/components/providers/theme/theme.provider";
import "./globals.css";
import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";

const DefaultFont = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Kamalan",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={DefaultFont.className}>
        <ClientThemeProvider>{children}</ClientThemeProvider>
      </body>
    </html>
  );
}
