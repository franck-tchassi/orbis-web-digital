import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <footer 
      className="bg-white py-8 px-4 mt-6" 
      aria-label="Pied de page"
      itemScope
      itemType="https://schema.org/WPFooter" // Ajout de microdonnées
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link 
            href="/" 
            passHref 
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm"
            aria-label="Retour à l'accueil"
          >
            <Image
              src="/logo/orbis-logo.png" 
              alt="Logo Orbis Web Digital - Agence web à Monteux" // Alt plus descriptif
              width={132} 
              height={55} 
              className="p-4 flex items-center"
              priority
            />
          </Link>
          
          <nav aria-label="Navigation secondaire">
            <div className="flex gap-6">
              <Link 
                href="/contact" 
                className="text-gray-600 hover:text-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm px-2 py-1"
                aria-label="Contactez notre agence web à Monteux"
              >
                Nous contacter
              </Link>
              <Link 
                href="/meeting" 
                className="text-gray-600 hover:text-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm px-2 py-1"
                aria-label="Prendre rendez-vous avec notre équipe"
              >
                Réserver un appel
              </Link>
            </div>
          </nav>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Orbis Web Digital. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;