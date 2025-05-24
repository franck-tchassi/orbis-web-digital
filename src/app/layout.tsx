import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Orbis Web Digital | Création de sites premium',
  description: 'Agence spécialisée en développement web sur mesure et stratégie SEO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-white text-gray-900`}>
        
        <main>{children}</main>

      </body>
    </html>
  )
}
