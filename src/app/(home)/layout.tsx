import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'


interface LandingPageProps {
  children: React.ReactNode
}

const landingLayout = ({children}: LandingPageProps) => {
  return (
    <div>
        <Header />
          {children}
        <Footer />
    </div>
  )
}

export default landingLayout