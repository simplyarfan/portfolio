import type { Metadata } from "next";
import { Space_Grotesk, Inter, Righteous, Bungee } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainContent from "@/components/MainContent";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const righteous = Righteous({
  variable: "--font-righteous",
  subsets: ["latin"],
  weight: ["400"],
});

const bungee = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Syed Arfan Hussain - Portfolio",
  description: "Personal portfolio website of Syed Arfan Hussain - Developer, Creator, and Tech Enthusiast",
  keywords: ["Syed Arfan Hussain", "Portfolio", "Developer", "Web Development"],
  authors: [{ name: "Syed Arfan Hussain" }],
  openGraph: {
    title: "Syed Arfan Hussain - Portfolio",
    description: "Personal portfolio website showcasing projects and skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E3QNJ1053G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E3QNJ1053G');
          `}
        </Script>
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${righteous.variable} ${bungee.variable} antialiased`}
        style={{ background: "#000000" }}
      >
        <Header />
        <MainContent>
          <main>
            {children}
          </main>
          <Footer />
        </MainContent>
      </body>
    </html>
  );
}
