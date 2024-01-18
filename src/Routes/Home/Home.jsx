import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Card from '../../Components/Cards/Card'
import Steps from '../../Components/Steps/Steps'
import AdvSection from '../../Components/Section-1/AdvSection'
import Navbar from '../../Components/Navbar/Navbar'

function Home() {
    return (
        <div className="home-page">
          <Navbar/>
          <Hero/>
          <Card/>
          <Steps/>
          <AdvSection/>
        </div>
    )
}

export default Home