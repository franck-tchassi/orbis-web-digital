
import React from 'react'
import WordFadeIn from "../../../components/magicui/word-fade-in";
import { BlurFadeDemo } from '@/components/demos/blur-fade-demo';
import { Metadata } from 'next';



export const metadata: Metadata = {
    title: "Nos Réalisations | Orbis Web Digital - Projets Web à Monteux",
    description: "Découvrez nos projets récents de création de sites web et applications sur mesure pour nos clients à Monteux et dans le Vaucluse",
    alternates: {
      canonical: "https://orbis-web-digital.vercel.app/project",
    },
    openGraph: {
      title: "Nos Réalisations Web | Orbis Web Digital",
      description: "Portfolio de nos projets web développés pour nos clients",
      images: [
        {
          url: "/images/projects-og.jpg",
          width: 1200,
          height: 630,
          alt: "Projets Orbis Web Digital",
        },
      ],
    },
}

const ProjectCard = () => {
  return (
    <section className='py-12 md:py-20 px-6 md:px-0 xl:w-4/5 mx-auto '>
        <div className='mt-16 md:mt-24'>
          <WordFadeIn 
            className='text-3xl lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center z-20'
            words='Conception et code qui aident votre entreprise à se développer' 
            aria-label="Conception et code qui aident votre entreprise à se développer" 
          />
          <p className='md:text-center text-xl md:text-2xl my-6 md:my-8 md:w-4/5 mx-auto text-gray-600'>
            Jetez un œil à certains de nos projets récents.
          </p>

          <BlurFadeDemo />
        </div>
    </section>
  )
}

export default ProjectCard