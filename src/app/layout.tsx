
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Full Stack Developer Olek",
  description: "with a passion for crafting modern web applications...",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const classNames = [geistSans.variable, geistMono.variable, "antialiased"]
    .filter(Boolean) // Убираем возможные undefined или пустые значения
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
