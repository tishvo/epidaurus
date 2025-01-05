import type { Metadata } from "next";
import { proximaRegular } from "../lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amphitheater",
  description: "Amphitheater dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${proximaRegular.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
