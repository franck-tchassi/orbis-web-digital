import React from 'react'
import WordFadeIn from "../../../components/magicui/word-fade-in";
import { BlurFadeDemo } from '@/components/demos/blur-fade-demo';



const ProjectCard = () => {
  return (
    <section className='md:px-0 px-6 xl:w-4/5  mx-auto justify-between md:flex'>
        <div className='mt-24 mx-auto'>
        
          <WordFadeIn 
            className='text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center z-20'
            words='Conception et code qui aident votre entreprise à se développer' 
          />
          <p className='md:text-center text-xl md:text-2xl my-6 md:w-4/5 mx-auto text-gray-600 ' >
            Jetez un œil à certains de nos projets récents.
          </p>

          <BlurFadeDemo />
        </div>
    </section>
  )
}

export default ProjectCard