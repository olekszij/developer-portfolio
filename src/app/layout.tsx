import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Full Stack Developer Olek",
  description:
    "Full-stack web developer specialising in React, Next.js, TypeScript and Node.js. Building modern web applications with a strong UX eye.",
  metadataBase: new URL("https://olekdev.netlify.app"),
  openGraph: {
    title: "Full Stack Developer Olek",
    description:
      "Full-stack web developer specialising in React, Next.js, TypeScript and Node.js.",
    type: "website",
  },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const classNames = [inter.variable, GeistMono.variable, "antialiased"]
    .filter(Boolean)
    .join(" ");

  return (
    <html lang="en">
      <body className={classNames}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
