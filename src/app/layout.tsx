import type { Metadata } from "next";

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
