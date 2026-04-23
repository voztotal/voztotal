import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voztotal.mx"),
  title: {
    default: "VOZTOTAL | Telefonía IP, SD-WAN e Internet Dedicado para Empresas en México",
    template: "%s | VOZTOTAL",
  },
  description:
    "Empresa mexicana con +13 años de experiencia en telefonía IP, SD-WAN, internet dedicado, campañas SMS, ciberseguridad y soporte TI. Reduce tus costos hasta 50%.",
  alternates: { canonical: "https://voztotal.mx/" },
  openGraph: {
    type: "website",
    siteName: "VOZTOTAL",
    locale: "es_MX",
    url: "https://voztotal.mx/",
    title: "VOZTOTAL | Telefonía IP y Telecomunicaciones para Empresas en México",
    description:
      "Empresa mexicana con +13 años en soluciones de telefonía IP, SD-WAN e Internet Dedicado. Reducción de costos hasta 50%.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VOZTOTAL | Telefonía IP para Empresas en México",
    description: "Telefonía IP, SD-WAN, Internet Dedicado. Empresa mexicana con +13 años.",
  },
  robots: { index: true, follow: true },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://voztotal.mx/#organization",
      name: "VOZTOTAL",
      url: "https://voztotal.mx/",
      logo: "https://voztotal.mx/assets/img/logo.png",
      foundingDate: "2009",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Boulevard de Los Gobernadores, Monte Blanco II",
        addressLocality: "Querétaro",
        addressRegion: "QRO",
        postalCode: "76087",
        addressCountry: "MX",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+52-55-888-02-100",
        contactType: "customer service",
        availableLanguage: "Spanish",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://voztotal.mx/#website",
      url: "https://voztotal.mx/",
      name: "VOZTOTAL",
      publisher: { "@id": "https://voztotal.mx/#organization" },
      inLanguage: "es-MX",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={quicksand.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0SDJE3QDKT"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-0SDJE3QDKT');`}
        </Script>
        {/* JSON-LD rendered via React Server Component script children — static data, no user input */}
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify(schemaOrg)}
        </script>
      </head>
      <body className="font-sans text-gray-800 antialiased">
        <noscript>
          <p>
            VOZTOTAL — Telefonía IP, SD-WAN e Internet Dedicado para empresas en México.
            Contáctanos: contacto@voztotal.mx | Tel: (55) 888 02 100
          </p>
        </noscript>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
