import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {

  
  title: "Frippy | Same-Day Delivery & Free Installation for Mobile Covers, Screen Guards, & More",
  description:
    "Shop at Frippy Bangalore for high-quality mobile covers, tempered glass screen protectors, and accessories with same-day delivery and free installation. Enjoy a free spa with every order and support our mission to sponsor the education of 1 lakh children. Get your smartphone protected with premium products, delivered straight to your door in Bangalore with no extra charge for installation.",
    keywords: [
      // General Product + Location Keywords
      "mobile covers Bangalore",
      "best mobile covers Bengaluru",
      "back covers Bangalore",
      "iPhone covers Bangalore",
      "Samsung Galaxy S23 cover Bangalore",
      "Realme mobile covers Bangalore",
      "phone cases Bangalore",
      "screen protectors Bangalore",
      "mobile accessories Bangalore",
      "mobile back covers Bangalore",
  
      // Brand-Specific Keywords
      "iPhone 15 case Bangalore",
      "iPhone 14 tempered glass Bangalore",
      "Samsung S23 screen protector Bangalore",
      "iPhone screen protector Bangalore",
      "Galaxy S23 screen protector Bangalore",
      "OnePlus 11 case Bangalore",
      "Realme 9 mobile cover Bangalore",
      "best phone case for iPhone Bangalore",
      "mobile cover for OnePlus 11 Bangalore",
      "Realme 9 case Bangalore",
  
      // Service-Related Keywords
      "same-day delivery Bangalore mobile covers",
      "mobile cover installation Bangalore",
      "free installation mobile covers Bangalore",
      "mobile accessories installation Bangalore",
      "free spa with mobile purchase Bangalore",
      "same-day mobile cover installation Bangalore",
      "tempered glass installation Bangalore",
      "mobile protection Bangalore with free installation",
  
      // Targeting Buyer Intent
      "buy mobile covers Bangalore with free installation",
      "premium mobile covers Bangalore",
      "mobile accessories for iPhone Bangalore",
      "buy iPhone 15 case Bangalore",
      "best phone accessories for Samsung Bangalore",
      "buy tempered glass with free delivery Bangalore",
      "buy phone cases Bangalore",
      "buy tempered glass Bangalore with installation",
      "buy mobile accessories Bangalore with free installation",
  
      // Keywords for Social Impact & Education (to align with your brand values)
      "children education Bangalore Bengaluru frippy",
      "sponsor children education Bangalore Bengaluru frippy",
      "social impact Bangalore Bengaluru frippy",
      "support education Bangalore Bengaluru frippy",
      "help educate children Bangalore Bengaluru frippy",
  
      // Additional Relevant Keywords
      "mobile protection for iPhone frippy",
      "Galaxy mobile protection frippy",
      "Android mobile protection frippy",
      "best mobile accessories frippy",
      "same-day delivery frippy",
      "free installation frippy",
      "phone protection frippy",
      "spa with mobile purchase frippy",
      "iPhone accessories Bangalore",
      "Samsung mobile accessories Bangalore",
      "mobile accessories for Samsung Bangalore",
      "best mobile covers frippy",
      "back covers for iPhone Bangalore",
      "smartphone covers Bangalore",
      "mobile cases for Samsung Bangalore"
  ]
,  
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
        url: "/images/og-homepage.jpg",
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
        {/* Title and Meta Tags */}
        <title>Frippy | Same-Day Delivery & Free Installation for Mobile Covers, Screen Guards, & More</title>
        <meta name="description" content="Shop at Frippy Bangalore for high-quality mobile covers, tempered glass screen protectors, and accessories with same-day delivery and free installation. Enjoy a free spa with every order and support our mission to sponsor the education of 1 lakh children. Get your smartphone protected with premium products, delivered straight to your door in Bangalore with no extra charge for installation." />
        <meta name="keywords" content="mobile covers, back covers, tempered glass, phone cases, cable protectors, mobile accessories, same-day delivery, free installation, smartphone protection, children education" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frippy.in" />
        <meta property="og:title" content="Frippy | Same-Day Delivery & Free Installation for Mobile Covers, Screen Guards, & More" />
        <meta property="og:description" content="Shop Frippy for premium mobile covers, tempered glass, and phone accessories with same-day delivery and free installation. Enjoy a free spa with every purchase and support our mission to sponsor the education of 1 lakh children in Bangalore." />
        <meta property="og:image" content="/images/og-homepage.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Frippy Bangalore homepage banner" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Frippy | Same-Day Delivery & Free Installation for Mobile Covers, Screen Guards, & More" />
        <meta name="twitter:description" content="Get same-day delivery and free installation for mobile covers, tempered glass, and phone accessories at Frippy Bangalore. Enjoy a free spa and help us sponsor the education of 1 lakh children." />
        <meta name="twitter:image" content="/images/og-homepage.jpg" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="twitter:image:alt" content="Frippy Bangalore homepage banner on Twitter" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Frippy",
              "url": "https://frippy.in",
              "logo": "/images/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-as",
                "contactType": "Customer Service",
              },
              "sameAs": [
                "https://www.instagram.com/frippy.in/",
              ],
            }),
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/icon.ico" type="image/x-icon" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://frippy.in" />
      </Head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}