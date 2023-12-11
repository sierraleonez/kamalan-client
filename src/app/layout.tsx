import ClientThemeProvider from "@/components/providers/theme/theme.provider";
import "./globals.css";
import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import ReduxStoreProvider from "@/components/providers/redux-store";

const DefaultFont = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Kamalan Registry",
  description: "Kamalan Registry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={DefaultFont.className}>
        <ReduxStoreProvider>
          <ClientThemeProvider>{children}</ClientThemeProvider>
        </ReduxStoreProvider>
      </body>
    </html>
  );
}
