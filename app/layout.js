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
  title: "Order Handwritten Assignments Online | IgnouBackBenchers",
  description:
    "IgnouBackBenchers provides high-quality handwritten assignments and notes tailored for IGNOU University students. Easy, reliable, and timely delivery.",
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
