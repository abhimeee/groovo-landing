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
      <head>
        <script 
          type="text/javascript" 
          src="https://assets.mailerlite.com/js/universal.js"
          async={true}
        ></script>
        <script
          id="mailerlite-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.mlDefined = false;
              (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){
                (w[f].q=w[f].q||[])
                .push(arguments);};l=d.createElement(e),l.async=1,l.src=u,
                n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);
                w.mlDefined = true;
              })(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
              ml('account', '1827213');
            `
          }}
        />
      </head>
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
