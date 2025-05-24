import React from 'react'
import { FlipTextDemo } from './demos/flit-text-demo'
import Image from 'next/image';
import { ScrollBasedVelocityDemo } from './demos/scroll-based-velocity-demo';

const services = [
    {
      icon: "/images/s_6.png",
      title: "Conception et développement Web",
      description:
        "Faites passer votre entreprise au niveau supérieur avec nos services de conception et de développement Web",
    },
    {
      icon: "/images/s_1.png",
      title: "Optimisation des moteurs de recherche",
      description:
        "Placez votre site Web en tête des résultats des moteurs de recherche grâce à nos services de référencement",
    },
    {
      icon: "/images/s_5.png",
      title: "Création de contenu",
      description:
        "Boostez la présence en ligne de votre marque avec nos services de marketing sur les réseaux sociaux",
    },
    
];


const Services = () => {
  return (
    <section className=' xl:w-4/5 mx-auto px-6 md:px-20 py-16' id='services'>
        <h2>
            <FlipTextDemo />
        </h2>

        <p className='text-lg text-gray-600 max-w-2xl py-4  mx-auto '>
          Tous nos services sont conçus pour aider votre entreprise à se démarquer
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 text-center">
                {service.title}
                </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
                {service.description}
              </p>
              </div>
            ))}
        </div>
        <div className='py-20'>
            <ScrollBasedVelocityDemo />
        </div>
    </section>
  )
}

export default Services