import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
  title: "Olek — UX/UI Designer & Développeur React | Paris",
  description:
    "UX/UI Designer et Développeur React freelance à Paris. Je conçois et développe des sites web et applications qui convertissent. Un seul interlocuteur du design au code.",
  metadataBase: new URL("https://olekdev.netlify.app"),
  keywords: [
    "UX designer Paris",
    "UI designer Paris",
    "développeur React Paris",
    "développeur freelance Paris",
    "création site web Paris",
    "UX UI développeur",
    "Next.js freelance",
    "refonte site web Île-de-France",
  ],
  openGraph: {
    title: "Olek — UX/UI Designer & Développeur React | Paris",
    description:
      "UX/UI Designer et Développeur React freelance à Paris. Un seul interlocuteur pour concevoir et développer votre projet digital.",
    type: "website",
    locale: "fr_FR",
  },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const classNames = [inter.variable, GeistMono.variable, "antialiased"]
    .filter(Boolean)
    .join(" ");

  return (
    <html lang="fr">
      <body className={classNames}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
