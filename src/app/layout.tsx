import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import ScrollToTop from "@/components/ScrollToTop";
import PaletteSwitcher from "@/components/PaletteSwitcher";
import DuaBanner from "@/components/DuaBanner";
import QuranPlayer from "@/components/QuranPlayer";

const themeInitScript = `
(function () {
  try {
    var theme = localStorage.getItem("gik-palette");
    if (theme) document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const body = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const title = "Gathered in Khayr";
const description =
  "A resource network for young Muslims — perspectives, resources, and references on contemporary issues through an Islamic lens.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: title,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-champagne text-foreground">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <SplashScreen />
        <Header />
        <DuaBanner />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        <PaletteSwitcher />
        <QuranPlayer />
      </body>
    </html>
  );
}
