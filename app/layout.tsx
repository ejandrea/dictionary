import ThemeProvider from "@/context/ThemeProvider";
import type { Metadata } from "next";
import { Inconsolata, Inter, Lora } from "next/font/google";
import "./globals.css";
import FontProvider from "@/context/FontProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Dictionary",
  description: "Dictionary UI Challenge by Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lora.variable} ${inconsolata.variable}`}>
        <ThemeProvider>
          <FontProvider>{children}</FontProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
