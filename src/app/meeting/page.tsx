"use client";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";
import Header from '@/components/Header';
import Calendly from "./Calendly";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const MeetingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className='md:px-0 px-6 xl:w-4/5 2xl:w-[68%] mx-auto justify-between md:flex'>
        <div className='md:w-2/5 mt-24'> {/* Marge supérieure réduite */}
          {/* Titre principal réduit */}
          <h2 className='text-3xl md:text-4xl font-semibold pt-8 text-gray-900 dark:text-white'>
            Rencontrons-nous
          </h2>
          
          {/* Sous-titre réduit */}
          <p className='text-base md:text-lg text-gray-600 dark:text-gray-300 py-4 leading-normal'>
            Nous sommes toujours ravis de discuter de nouveaux projets.
          </p>

          {[
            {
              title: "Développement + Conception",
              description: "Transformez vos idées en réalité grâce à nos services.",
            },
            {
              title: "Consultation gratuite",
              description: "Conseils d'experts pour améliorer votre présence en ligne.",
            },
            {
              title: "Support technique",
              description: "Assistance pour votre site ou application.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={checkItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.15 }}
              className="flex gap-x-4 py-3" // Espacement réduit
            >
              <PiCheckCircle className="text-xl text-[#3d80d7] flex-shrink-0 mt-0.5" /> {/* Icône réduite */}
              <div>
                {/* Titre d'item réduit */}
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                  {item.title}
                </h3>
                {/* Description réduite */}
                <p className="text-base text-gray-600 dark:text-gray-400 leading-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:w-1/2 mt-12 md:mt-24"> {/* Marge réduite */}
          <Calendly />
        </div>
      </div>
    </div>
  );
};

export default MeetingPage;