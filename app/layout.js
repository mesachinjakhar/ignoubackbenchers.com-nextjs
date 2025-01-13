import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "@/components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";

const raleway = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
  title:
    "IGNOU Assignment Writing Services | Order Handwritten Assignments Online", // SEO title with primary keyword
  description:
    "Order top-quality handwritten assignments for IGNOU University from IgnouBackBenchers. Affordable, reliable, and tailored services with timely delivery. Simplify your assignment submission process today!", // SEO-optimized meta description
  keywords: [
    "IGNOU assignment writing services", // Primary keyword
    "handwritten assignments for IGNOU", // Secondary keyword
    "IGNOU handwritten assignments online", // Supporting keyword
    "IGNOU assignment help",
    "custom handwritten assignments for IGNOU",
  ],
  openGraph: {
    title:
      "IGNOU Assignment Writing Services | Order Handwritten Assignments Online", // Open Graph title
    description:
      "Get affordable and high-quality handwritten assignments for IGNOU University students with IgnouBackBenchers. Reliable and easy services just for you!", // Open Graph description
    url: "https://www.ignoubackbenchers.com", // Your website URL
    type: "website",
    images: [
      {
        url: "https://www.ignoubackbenchers.com/images/handwritten-assignments.jpg", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Handwritten Assignments for IGNOU University", // Image alt text
      },
    ],
  },
  twitter: {
    card: "summary_large_image", // Ensures large Twitter card rendering
    title:
      "IGNOU Assignment Writing Services | Order Handwritten Assignments Online", // Twitter title
    description:
      "Need help with IGNOU assignments? IgnouBackBenchers offers top-notch handwritten assignments with fast delivery and affordable pricing!", // Twitter description
    images: [
      "https://www.ignoubackbenchers.com/images/handwritten-assignments.jpg", // Replace with your image URL
    ],
  },
  robots: {
    index: true, // Allow search engines to index this page
    follow: true, // Allow search engines to follow links on this page
  },
  canonical: "https://www.ignoubackbenchers.com", // Canonical URL
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className}`}>
        <Header />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
