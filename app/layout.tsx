import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
// config
import config from "@/config/general";
// components
import { VideoBackground } from "@/components";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"] });
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-body bg-gray`}>
        <VideoBackground videoId="JSFG-IE8n_c" />
        <div className={`${playfair.className}`}>
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
