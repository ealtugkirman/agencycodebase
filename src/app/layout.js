import "./globals.css";
import { cx } from "../../src/utils";
import { Inter, Manrope, Work_Sans } from "next/font/google";
import Footer from "../components/Footer";
import siteMetadata from "../utils/siteMetaData";
import Script from "next/script";
import Header from "../components/header";
import { GoogleTagManager } from "@next/third-parties/google";
import NewsLetter from "../components/NewsLetter";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const worksans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(inter.variable, worksans.variable, "font-mr bg-light")}>
        <Script
          async
          // src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8265654758847402"
          crossorigin="anonymous"></Script>
        <div />
        <Header />
        <GoogleTagManager gtmId="G-JDPPXZPD6Q" />

        {children}
        <NewsLetter />
        <Footer />
      </body>
    </html>
  );
}
