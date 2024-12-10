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
    "mobile covers Bangalore Bengaluru", 
    "tempered glass Bangalore Bengaluru", 
    "screen protectors Bangalore Bengaluru", 
    "phone cases Bangalore Bengaluru", 
    "cable protectors Bangalore Bengaluru", 
    "mobile accessories Bangalore Bengaluru", 
    "same-day delivery Bangalore Bengaluru", 
    "free installation Bangalore Bengaluru", 
    "smartphone protection Bangalore Bengaluru", 
    "free spa Bangalore Bengaluru", 
    "spa with mobile purchase Bangalore Bengaluru", 
    "children education Bangalore Bengaluru", 
    "sponsor children education Bangalore Bengaluru", 
    "social impact Bangalore Bengaluru", 
    "support education Bangalore Bengaluru ",
    "mobile covers ", 
    "tempered glass ", 
    "screen protectors ", 
    "phone cases ", 
    "cable protectors ", 
    "mobile accessories ", 
    "same-day delivery ", 
    "free installation ", 
    "smartphone protection ", 
    "free spa ", 
    "spa with mobile purchase ", 
    "children education ", 
    "sponsor children education ", 
    "social impact ", 
    "support education ",
    "iPhone covers",
    "iPhone 15 case",
    "iPhone 14 tempered glass",
    "iPhone screen protector",
    "Samsung Galaxy S23 cover",
    "Galaxy S23 screen protector",
    "mobile covers",
    "tempered glass",
    "phone cases",
    "cable protectors",
    "phone accessories",
    "mobile accessories for iPhone",
    "Samsung A54 case",
    "OnePlus 11 cover",
    "Realme 9 mobile cover",
    "best mobile accessories",
    "free installation",
    "same-day delivery",
    "mobile protection for iPhone",
    "Galaxy mobile protection",
    "Android mobile protection"
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