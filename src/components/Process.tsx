import React from 'react'
import { AnimatedBeamMultipleOutputDemo } from './demos/animated-beam-multiple-output-demo'
import BoxRevealDemo from './demos/box-reveal-demo'

const Process = () => {
  return (
    <section className='max-w-7xl mx-auto px-6 md:px-20  py-16 md:py-24'>
      <div className='text-center mb-12'>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4'>
          Notre Processus Créatif
        </h1>
        <p className='text-lg  text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
          Une méthodologie éprouvée pour transformer vos idées en solutions digitales performantes
        </p>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12'>
        <div className='w-full lg:w-1/2'>
          <AnimatedBeamMultipleOutputDemo />
        </div>
        <div className='w-full lg:w-1/2'>
          <div className='bg-white dark:bg-gray-800/50 p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700'>
            <BoxRevealDemo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process