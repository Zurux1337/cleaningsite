import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/lib/theme";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "900"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  variable: "--font-steep-display",
});

const THEME_INIT = `(function(){try{var t=localStorage.getItem("cleaning-theme");if(t==="steep"||t==="playful")document.documentElement.dataset.theme=t;}catch(e){}})()`;

export const metadata: Metadata = {
  title: {
    default: "Клининг — уборка квартир и офисов",
    template: "%s — Клининг",
  },
  description: "Профессиональная уборка квартир и офисов. Быстрый расчёт стоимости и заказ онлайн.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.className} ${sourceSerif.variable} antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
