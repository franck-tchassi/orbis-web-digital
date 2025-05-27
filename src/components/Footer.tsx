import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 mt-6" aria-label="Pied de page">
      <div className="max-w-4xl mx-auto">
        {/* Ligne supérieure avec nom et liens */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
            <Link href="/" passHref className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm">
              <Image
                src="/logo/orbis-logo.png" 
                alt="Orbis Web Digital - Retour à l'accueil" 
                width={132} 
                height={55} 
                className="p-4 flex items-center"
                priority
              />
            </Link>
          
          
          <nav aria-label="Liens secondaires">
            <div className="flex gap-6">
              <Link 
                href="/contact" 
                className="text-gray-600 hover:text-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm px-2 py-1"
              >
                Nous contacter
              </Link>
              <Link 
                href="/meeting" 
                className="text-gray-600 hover:text-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm px-2 py-1"
              >
                Réserver un appel
              </Link>
            </div>
          </nav>
        </div>

        {/* Ligne inférieure avec copyright */}
        <div className="mt-6 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Orbis Web Digital. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;