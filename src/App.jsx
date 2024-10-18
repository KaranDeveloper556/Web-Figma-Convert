import React from 'react';

import Navigation from './Components/common/Navigation';
import HeroSection from './Components/sections/HeroSection';
import DetailsSection from './Components/sections/DetailsSection';
import HowSystemWorks from './Components/sections/HowSystemWorks';
import Pricing from './Components/sections/Pricing'
import Footer from './Components/common/Footer';
import NoticeLine from './Components/common/NoticeLine';

const App = () => {
  return (
    <>
      <header>
        <Navigation />
        <HeroSection />
      </header>
      <main className='flex flex-col items-center'>
        <DetailsSection />
        <HowSystemWorks />
        <Pricing />
      </main>
      <footer>
        <Footer />
        <NoticeLine />
      </footer>
    </>
  )
}

export default App
