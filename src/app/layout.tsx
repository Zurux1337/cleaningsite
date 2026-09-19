import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

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
    <html lang="ru">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
