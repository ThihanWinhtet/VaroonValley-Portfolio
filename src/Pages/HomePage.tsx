import AboutVaroon from "../Components/AboutVaroonValley/AboutVaroon"
import ContactUs from "../Components/ContactUs/ContactUs"
import Footer from "../Components/Footer/Footer"
import Home from "../Components/Home/Home"
import OurServices from "../Components/OurServices/OurServices"
import Testimonial from "../Components/Testimonial/Testimonial"
import WhatWeDo from "../Components/WhatWeDo/WhatWeDo"

const HomePage = () => {
  return (
    <>
        <Home/>
        <WhatWeDo/>
        <OurServices/>
        <AboutVaroon/>
        <Testimonial/>
        <ContactUs/>
        <Footer/>
    </>
  )
}

export default HomePage