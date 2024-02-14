import { Analytics } from '@vercel/analytics/react';

import "@/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "SkmAI",
  description: "AI-Powered Youtube Video Search",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`} style={{ backgroundImage: 'url(/background_gradient.png)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
