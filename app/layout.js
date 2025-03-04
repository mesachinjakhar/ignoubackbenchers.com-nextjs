import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "@/components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const raleway = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
  title:
    "IGNOU Solved Assignments & Previous Year Question Papers - Order Online",
  description:
    "Get IGNOU solved assignments and previous year question papers with answers. Order IGNOU handwritten assignments, solved guess papers, and projects online for fast delivery.",
  keywords: [
    "IGNOU solved assignments",
    "IGNOU previous year question papers solved",
    "IGNOU assignment 2024 PDF",
    "IGNOU handwritten assignments",
    "IGNOU BEGAE 182 question paper solved",
    "IGNOU solved guess papers",
    "IGNOU project reports",
  ],
  openGraph: {
    title:
      "IGNOU Solved Assignments & Previous Year Question Papers - Order Online",
    description:
      "Get high-quality IGNOU solved assignments and previous year question papers with answers. Order now for fast delivery!",
    url: "https://www.ignoubackbenchers.com",
    type: "website",
    images: [
      {
        url: "https://www.ignoubackbenchers.com/images/solved-assignments.jpg",
        width: 1200,
        height: 630,
        alt: "IGNOU Solved Assignments and Previous Year Question Papers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "IGNOU Solved Assignments & Previous Year Question Papers - Order Online",
    description:
      "Need IGNOU solved assignments? Get previous year question papers and handwritten assignments with fast delivery.",
    images: ["https://www.ignoubackbenchers.com/images/solved-assignments.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  canonical: "https://www.ignoubackbenchers.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16878384589"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16878384589');
          `}
        </Script>
      </head>
      <body className={`${raleway.className}`}>
        <Header />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
