import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/lib/theme";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "900"],
});

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
      <body className={`${inter.className} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("cleaning-theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t;}catch(e){}})()`,
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
