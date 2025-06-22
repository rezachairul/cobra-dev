// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🔥 Judul berdasarkan pathname
export async function generateMetadata() {
  const headersList = await headers(); // ⬅️ pakai await!
  const pathname = headersList.get("x-next-url"); // dapetin path-nya

  const routeTitleMap = {
    "/": "Home | CobraDev",
    "/resume": "My Resume | CobraDev",
    "/dashboard": "Dashboard | CobraDev",
  };

  return {
    title: routeTitleMap[pathname] || "CobraDev",
    description: "CobraDev - Portfolio of a GIS and Web Developer",
    icons: {
      icon: "/assets/img/logo-cobradev.svg",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
