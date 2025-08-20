import { ThemeProvider } from "@/app/components/ThemeProvider";
import type { Metadata } from "next";
import { Inter, Fira_Code } from 'next/font/google';
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Only load what you need
  variable: '--font-fira-code', // optional: useful for Tailwind
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'], // Only load what you need
  variable: '--font-inter',      // Optional CSS variable
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Romel Custodio - Front End Developer",
  description: "Building digital user interfaces and experiences with modern technologies. Focused on creating elegant solutions to complex problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" app-version="release-v2.0" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
