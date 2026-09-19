import type { Metadata } from "next";
import { Toaster } from "sonner";

import "./globals.css";

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
      <body className="antialiased">
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
