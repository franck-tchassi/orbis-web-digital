import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Orbis Web Digital | Création de sites web, vitrine et e-commerce à Monteux',
  description: 'Agence web à Monteux spécialisée en création de sites vitrine et e-commerce, développement sur mesure et stratégie SEO pour booster votre visibilité',
  keywords: [
    'agence web Monteux',
    'agence web Lyon',
    'agence web Marseille',
    'création site internet',
    'développement web',
    'référencement SEO',
    'site vitrine',
    'e-commerce'
  ],
  openGraph: {
    title: 'Orbis Web Digital | Experts en développement web à Monteux',
    description: 'Transformez votre présence digitale avec nos solutions web sur mesure et stratégie SEO performante',
    url: 'https://orbis-web-digital.vercel.app/',
    siteName: 'Orbis Web Digital',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Orbis Web Digital - Agence web Monteux',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbis Web Digital | Experts en développement web à Monteux',
    description: 'Agence web spécialisée en création de sites web , e-commerce et stratégie digitale',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-verification-google',
    yandex: 'votre-code-verification-yandex',
  },
  alternates: {
    canonical: 'https://orbis-web-digital.vercel.app/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="https://orbis-web-digital.vercel.app/" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Orbis Web Digital",
              "image": "/logo/orbis-logo.png",
              "@id": "https://orbis-web-digital.vercel.app/",
              "url": "https://orbis-web-digital.vercel.app/",
              "telephone": "+33656839896",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "29 impasse de roumanie",
                "addressLocality": "Monteux",
                "postalCode": "84170",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.0008, 
                "longitude": 4.9973 
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "satuday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.linkedin.com/company/orbiswebdigital",
                "https://www.orbis-web-digital.vercel.app/"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <main>{children}</main>
      </body>
    </html>
  )
}
