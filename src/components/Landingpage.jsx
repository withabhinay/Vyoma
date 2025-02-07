import React from 'react'
import Header from './Header'
import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "./Benefits";
import Collaboration from "./Collaboration";
import Footer from "./Footer";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Roadmap from "./Roadmap";
import Services from "./Services";
const Landingpage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Benefits/>

        
       
        <Footer />
      </div>
      <ButtonGradient />
    </>
  )
}

export default Landingpage