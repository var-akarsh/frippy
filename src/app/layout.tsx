import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Frippy | Same-Day Delivery & Free Installation for Mobile Covers, Screen Guards, & More",
  description:
    "Shop at Frippy Bangalore for high-quality mobile covers, tempered glass screen protectors, and accessories with same-day delivery and free installation. Enjoy a free spa with every order and support our mission to sponsor the education of 1 lakh children. Get your smartphone protected with premium products, delivered straight to your door in Bangalore with no extra charge for installation.",
  keywords: [
    "mobile covers Bangalore Bengaluru frippy", 
    "back covers Bangalore Bengaluru frippy", 
    "tempered glass Bangalore Bengaluru frippy", 
    "screen protectors Bangalore Bengaluru frippy", 
    "phone cases Bangalore Bengaluru frippy", 
    "cable protectors Bangalore Bengaluru frippy", 
    "mobile accessories Bangalore Bengaluru frippy", 
    "same-day delivery Bangalore Bengaluru frippy", 
    "free installation Bangalore Bengaluru frippy", 
    "smartphone protection Bangalore Bengaluru frippy", 
    "free spa Bangalore Bengaluru frippy frippy", 
    "spa with mobile purchase Bangalore Bengaluru frippy", 
    "children education Bangalore Bengaluru frippy", 
    "sponsor children education Bangalore Bengaluru frippy", 
    "social impact Bangalore Bengaluru frippy", 
    "support education Bangalore Bengaluru frippy ",
    "mobile covers frippy ", 
    "tempered glass frippy ", 
    "screen protectors frippy ", 
    "phone cases frippy frippy", 
    "cable protectors frippy", 
    "mobile accessories frippy", 
    "same-day delivery frippy", 
    "free installation frippy", 
    "smartphone protection frippy", 
    "free spa frippy", 
    "spa with mobile purchase frippy", 
    "children education frippy", 
    "sponsor children education frippy", 
    "social impact frippy", 
    "support education frippy",
    "iPhone coversfrippy",
    "iPhone 15 case",
    "iPhone 14 tempered glass frippy",
    "iPhone screen protector frippy",
    "Samsung Galaxy S23 cover frippy",
    "Galaxy S23 screen protector frippy",
    "mobile covers frippy",
    "tempered glass frippy",
    "phone cases frippy",
    "cable protectors frippy",
    "phone accessories frippy",
    "mobile accessories for iPhone frippy",
    "Samsung A54 case frippy",
    "OnePlus 11 cover frippy",
    "Realme 9 mobile cover frippy",
    "best mobile accessories frippy",
    "free installation frippy",
    "same-day delivery frippy",
    "mobile protection for iPhone frippy",
    "Galaxy mobile protection frippy",
    "Android mobile protection frippy"
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://frippy.in",
    title: "Frippy | Same-Day Delivery & Free Installation for Mobile Covers, Screen Guards, & More",
    description:
      "Shop Frippy for premium mobile covers, tempered glass, and phone accessories with same-day delivery and free installation. Enjoy a free spa with every purchase and support our mission to sponsor the education of 1 lakh children in Bangalore.",
    images: [
      {
        url: "/images/og-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Frippy Bangalore homepage banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frippy | Same-Day Delivery & Free Installation for Mobile Covers, Screen Guards, & More",
    description:
      "Get same-day delivery and free installation for mobile covers, tempered glass, and phone accessories at Frippy Bangalore. Enjoy a free spa and help us sponsor the education of 1 lakh children.",
    images: [
      {
        url: "/images/twitter-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Frippy Bangalore homepage banner on Twitter",
      },
    ],
  },
  icons: {
    icon: "/icon.ico",
  },

  alternates: {
    canonical: "https://frippy.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Frippy",
              "url": "https://frippy.in",
              "logo": "/images/logo.png", 
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9466533162", 
                "contactType": "Customer Service",
              },
              "sameAs": [
                "https://www.instagram.com/frippy.in/", 
                // "https://twitter.com/frippy_in",
              ],
            }),
          }}
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}