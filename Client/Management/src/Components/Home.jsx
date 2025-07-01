import React from 'react'
import Navbar from './Navbar'
import ContactForm from './ContactForm'
import RealtorSection from './RealtorSection'
import WhyChooseUs from './WhyChooseUs'
import AboutUs from './AboutUs'
import OurProjects from './OurProjects'
import HappyClients from './HappyClients'
import FooterSection from './FooterSection'

function Home() {
  return (
    <>
    <nav>
        <Navbar/>
        <ContactForm/>
        <RealtorSection/>
        <WhyChooseUs/>
        <AboutUs/>
        <OurProjects/>
        <HappyClients/>
        <FooterSection/>
    </nav>
    </>
  )
}

export default Home