// app/contact/layout.tsx (ou page.tsx)
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Contact | Orbis Web Digital - Agence web à Monteux (84170)",
    description: "Contactez notre agence web spécialisée à Monteux pour la création de site vitrine, e-commerce et application web sur mesure. Demande de devis en ligne.",
    alternates: {
      canonical: "https://orbis-web-digital.vercel.app/contact",
    },
    keywords: [
      "agence web Monteux",
      "création site internet Vaucluse",
      "devis site web 84170",
      "référencement SEO Monteux",
      "développement web professionnel"
    ],
    openGraph: {
      title: "Contact | Orbis Web Digital - Agence web à Monteux",
      description: "Demandez un devis gratuit pour votre projet web à Monteux et dans le Vaucluse",
      url: "https://orbis-web-digital.vercel.app/contact",
      type: "website",
      images: [{
        url: "/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contactez Orbis Web Digital",
      }],
    }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}