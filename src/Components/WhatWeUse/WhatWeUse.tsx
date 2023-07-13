import './WhatWeUse.css'
import ui from '../../assets/images/WhatWeUse/Edit photo-amico.svg'
import mb from '../../assets/images/WhatWeUse/Edit photo-pana.svg'
import web from '../../assets/images/WhatWeUse/Website Creator-cuate.svg'
import ai from '../../assets/images/WhatWeUse/Adobe_Illustrator_CC_icon.svg.png'
import fgm from '../../assets/images/WhatWeUse/640px-Figma-1-logo.png'
import ps from '../../assets/images/WhatWeUse/Adobe_Photoshop_CC_icon.svg.png'
import laravel from '../../assets/images/WhatWeUse/640px-Laravel.svg.png'
import mongoDB from '../../assets/images/WhatWeUse/mongodb.png'
import mysql from '../../assets/images/WhatWeUse/logo-mysql-26300.png'
import node from '../../assets/images/WhatWeUse/pngwing.com.png'
import php from '../../assets/images/WhatWeUse/PHP-logo.svg.png'
import python from '../../assets/images/WhatWeUse/Python-logo-notext.svg.png'
import react from '../../assets/images/WhatWeUse/React-icon.svg.png'
import js from '../../assets/images/WhatWeUse/Unofficial_JavaScript_logo_2.svg.png'
import java from '../../assets/images/WhatWeUse/Java_programming_language_logo.svg.png'
import css from '../../assets/images/WhatWeUse/CSS3_logo.svg.png'

const WhatWeUseCom = () => {
  return (
    <>
      <div className='wwu_container_main'>
        <div className="wwu_container pd2">          
        <h3>Design (UI/UX)</h3>
          <div className="wwu_content_info">
              <div>
                <img src={ui} alt="" />
              </div>
              <div className='wwu_cinfo_mini'>
                <h4>Graphic Design Services</h4>
                <p>Having an intuitive, easy to use and more appealing design can significantly increase adoption and improve project outcomes. Winexsoft offers design services for Mobile Apps, Websites, Wearables, and other software.</p>
              </div>
            </div>

            <div>
              <p className="wwu_content_title">What We Use</p>
              <div className="wwu_content">
                <img src={ai} alt="" />
                <img src={fgm} alt="" />
                <img src={ps} alt="" />
              </div>
            </div>
        </div>

        <div className="wwu_container pd2">
          <h3>Database and Enterprise Software</h3>
          <div className="wwu_content_info">
              <div>
                <img src={mb} alt="" />
              </div>
              <div className='wwu_cinfo_mini'>
                <h3>Database and Enterprise Software</h3>
                <p>Our enterprise software solutions are designed to streamline your business processes, increase operational efficiency, and drive productivity.</p>
              </div>
            </div>
            <div>
              <p className="wwu_content_title">What We Use</p>
            <div className="wwu_content">
              <img src={laravel} alt="" />
              <img src={node} alt="" />
              <img src={mysql} alt="" />
              <img src={mongoDB} alt="" />
              </div>
            </div>
        </div>


        <div className="wwu_container pd2">
          <h3>Mobile App and Web App Development</h3>
          <div className="wwu_content_info">
              <div>
                <img src={web} alt="" />
              </div>
              <div className='wwu_cinfo_mini'>
                <h4>Development Services</h4>
                <p>Our team of experienced developers specializes in creating innovative and user-friendly websites and mobile apps that enhance your online presence. We leverage the latest technologies to deliver customized solutions that meet your business objectives.</p>
              </div>
            </div>
            <div>
              <p className="wwu_content_title">What We Use</p>
            <div className="wwu_content">
              <img src={laravel} alt="" />
              <img src={php} alt="" />
              <img src={react} alt="" />
              <img src={python} alt="" />
              <img src={js} alt="" />
              <img src={java} alt="" />
              <img src={css} alt="" />
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeUseCom