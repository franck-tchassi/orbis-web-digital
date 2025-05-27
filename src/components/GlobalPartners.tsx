import React from 'react'
import { NumberTicker } from './magicui/number-ticker'
import { InfiniteMovingLogos } from './ui/infinite-moving-logo'

const GlobalPartners = () => {
  return (
    <section className="w-full overflow-hidden px-6 md:px-20 py-12 md:py-20"> {/* Modification ici */}
     <div className='max-w-7xl mx-auto'>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Partenaires Globaux
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Approuvé par les marques en évolution rapide du monde entier
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
        <div className="flex justify-center gap-8">
          <div className="text-center">
            <span className="text-blue-600 text-4xl md:text-5xl font-bold block">
              <NumberTicker value={99} />+
            </span>
            <span className="text-gray-500 text-sm md:text-base mt-2 block">
              Clients satisfaits
            </span>
          </div>
          
          <div className="w-px bg-gray-200 h-16 self-center"></div>
          
          <div className="text-center">
            <span className="text-blue-600 text-4xl md:text-5xl font-bold block">
              <NumberTicker value={10} />+
            </span>
            <span className="text-gray-500 text-sm md:text-base mt-2 block">
              Projets terminés
            </span>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Pourquoi nous choisir?
          </h3>
          <p className="text-gray-600">
            Orbis Web Digital transforme votre vision en réalité numérique avec 
            des solutions e-commerce et vitrine sur mesure.
          </p>
        </div>
      </div>

      <div className=" mt-12 w-full overflow-hidden">
        <h3 className="text-center text-xl font-medium text-gray-600">
          Ils nous font confiance
        </h3>
        <InfiniteMovingLogos
          speed="slow"
          direction="left"
          items={[
            { logo: "/logo/bilo.png", name: "Bilo" },
            { logo: "/logo/claudia.png", name: "Claudia" },
            { logo: "/logo/pocfly.png", name: "Pocfly" },
            { logo: "/logo/savoie.png", name: "Savoie" },
          ]}
        />
      </div>
      </div>
    </section>
  )
}

export default GlobalPartners