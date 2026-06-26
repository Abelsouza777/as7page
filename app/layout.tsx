import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  organizationJsonLd,
  websiteJsonLd,
  canonical,
} from "./lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AS7 Engenharia | Gestão em SST — Laudos, Treinamentos e Consultoria",
    template: "%s | AS7 Engenharia",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "segurança do trabalho",
    "saúde e segurança do trabalho",
    "SST",
    "engenharia de segurança do trabalho",
    "PGR",
    "PCMSO",
    "LTCAT",
    "laudo NR-12",
    "treinamento NR-35",
    "linha de vida",
    "avaliação psicossocial NR-01",
    "consultoria SST",
    "AS7 Engenharia",
    "segurança do trabalho Paraná",
  ],
  authors: [{ name: "AS7 Engenharia", url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: canonical("/"),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: canonical("/"),
    siteName: SITE_NAME,
    title: "AS7 Engenharia | Gestão em SST — Laudos, Treinamentos e Consultoria",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/site.png",
        width: 1200,
        height: 630,
        alt: "AS7 Engenharia — Gestão em Saúde e Segurança do Trabalho",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AS7 Engenharia | Gestão em SST",
    description: SITE_DESCRIPTION,
    images: ["/site.png"],
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
