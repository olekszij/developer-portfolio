import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Full Stack Developer Olek",
  description: "with a passion for crafting modern web applications...",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const classNames = [GeistSans.variable, GeistMono.variable, "antialiased"]
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
