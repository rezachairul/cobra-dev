// app/layout.js

import { Geist, Geist_Mono } from "next/font/google";
import Loader from "../components/ui/loader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata Global (lebih proper & SEO friendly)
export const metadata = {
  title: {
    default: "CobraDev",
    template: "%s | CobraDev",
  },
  description: "CobraDev - Portfolio of Reza Chairul as a Fullstack & GIS Developer",
  icons: {
    icon: "/favicon.svg", // pakai / bukan ./
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Loader>
          {children}
        </Loader>
      </body>
    </html>
  );
}