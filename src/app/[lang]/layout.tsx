import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getDictionary } from "../../dictionaries";

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

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  
  const classNames = [inter.variable, inter.className, "antialiased"].join(" ");

  return (
    <html lang={lang}>
      <body className={classNames}>
        <Header lang={lang} dict={dict.header} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
