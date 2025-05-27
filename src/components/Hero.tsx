import React from 'react'
import { CoverDemo } from './demos/cover-demo'
import Link from 'next/link'
import { BoxReveal } from './magicui/box-reveal'
import { BarChart2, Code2, Database, Palette } from 'lucide-react'

const Hero = () => {
    const features = [
        {
          title: "Design innovant",
          icon: <Palette className="text-blue-500 w-5 h-5" aria-hidden="true" />,
          description: "Interfaces modernes et centrées utilisateur"
        },
        {
          title: "Développement performant", 
          icon: <Code2 className="text-blue-500 w-5 h-5" aria-hidden="true" />,
          description: "Code optimisé et technologies récentes"
        },
        {
          title: "SEO optimisé",
          icon: <BarChart2 className="text-blue-500 w-5 h-5" aria-hidden="true" />,
          description: "Visibilité garantie sur les moteurs de recherche"
        },
        {
          title: "Stratégie data-driven",
          icon: <Database className="text-blue-500 w-5 h-5" aria-hidden="true" />,
          description: "Décisions basées sur l'analyse des données"
        }
      ]
  return (
    <section className='py-12 md:py-20 px-6 md:px-20 mt-16 md:mt-24'>
      <h1>
        <CoverDemo />
      </h1>
      
      <p className='md:text-center text-xl md:text-2xl my-8 md:my-12 md:w-4/5 mx-auto text-gray-600 dark:text-gray-300'>
        Transformez votre présence digitale avec des solutions sur-mesure.<br className="hidden md:block" />
        Obtenez un devis personnalisé en moins de 24h après notre échange.
      </p>
      
      <div className="flex flex-col sm:flex-row md:justify-center items-center gap-4 mt-8 md:mt-12">
        <Link
          href="/meeting"
          aria-label="Planifier un audit gratuit de votre projet"
          className="py-3 px-10 md:px-16 md:text-xl rounded-[6px] border-2 border-black dark:border-white bg-[#121212] text-white transition-all duration-300  hover:scale-105 hover:shadow-lg dark:hover:shadow-blue-500/20"
        >
          Planifier un audit gratuit
        </Link>
        
        <Link
          href="/project"
           aria-label="Voir nos réalisations et projets précédents"
          className="py-3 px-10 md:px-16 md:text-xl border-2 border-black dark:border-white bg-white dark:bg-[#121212] rounded-[6px] transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-900 hover:scale-105 hover:shadow-lg"
        >
          Voir nos réalisations
        </Link>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16 max-w-5xl mx-auto'>
          {features.map((feature, index) => (
            <BoxReveal key={index} boxColor={"#5046e6"} duration={0.5}>
              <p className="text-sm md:text-base lg:text-lg font-medium flex gap-x-2 items-center">
              {feature.icon}
              {feature.title}
            </p>
            </BoxReveal>
          ))}
        </div>
    </section>
  )
}

export default Hero


