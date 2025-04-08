import { Geist, Geist_Mono } from "next/font/google";
import "../styles/global.scss";
import "../styles/layout.scss";
import React from 'react';
import Navigation from '../features/navigation/Navigation';
import { NAV_LINKS } from '../store/config/navigations.config';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevMatch",
  description: "Найди своего партнёра для проекта",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navigation logo='DevMatch' links={NAV_LINKS}/>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
