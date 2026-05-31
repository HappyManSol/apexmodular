import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Montserrat } from "next/font/google";
import { Analytics } from "@/components/layout/Analytics";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const siteUrl = "https://apexmodularplates.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "APEX MODULAR | The Evolution of the Olympic Plate",
  description:
    "One precision-engineered plate. Multiple weighted sections. Infinite possibilities for your home gym. The future of heavy lifting is modular.",
  keywords: [
    "modular Olympic plates",
    "home gym",
    "adjustable weight plates",
    "patented locking plates",
    "APEX MODULAR",
  ],
  authors: [{ name: "APEX MODULAR" }],
  openGraph: {
    title: "APEX MODULAR | The Evolution of the Olympic Plate",
    description:
      "Patented modular Olympic plate system. Partner with facility owners, gym manufacturers, and distributors.",
    type: "website",
    locale: "en_US",
    siteName: "APEX MODULAR",
    url: siteUrl,
    images: [
      {
        url: "/images/figma/hero-smokey-plates.png",
        width: 1200,
        height: 630,
        alt: "APEX modular Olympic plates in a smoky gym environment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APEX MODULAR | The Evolution of the Olympic Plate",
    description:
      "Patented modular Olympic plate system. One plate, multiple weight sections, up to 50 lb.",
    images: ["/images/figma/hero-smokey-plates.png"],
  },
  icons: {
    icon: "/images/figma/logo.png",
    apple: "/images/figma/logo.png",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#141313",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "APEX MODULAR",
  url: siteUrl,
  logo: `${siteUrl}/images/figma/logo.png`,
  description:
    "Patented modular Olympic plate system engineered for home gyms and commercial partnerships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-button-primary focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:font-bold focus:uppercase focus:tracking-widest focus:text-button-primary-text"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main id="main-content" className="flex-1 pt-24">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
