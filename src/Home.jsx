import './home.css'
import img from './assets/logo.png'
import img2 from './assets/logo2.png'
import { useState } from 'react'
import About from './About'
import Contact from './Contact'
import video from './assets/video.mp4'
import Products from './Product'
import {motion} from 'framer-motion'


function Home(){
    return (
        <>
        <div className="first">
        <div className="video-container">
        <video autoPlay muted loop className="video-background">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
            <div className='heading'>
            <motion.h1
                        initial={{ opacity: 0, y: -50 }}   // Initial state (off-screen, invisible)
                        animate={{ opacity: 1, y: 0 }}      // Animate to visible position
                        transition={{ duration: 0.7 }}       // Animation duration
                    >
                        <span className="company-name">GA Applications</span>
                    </motion.h1>
                </div>
                <div className="content-written">
                    <motion.h3
                        initial={{ opacity: 0, x: -50 }}   // Start with text off-screen to the left
                        animate={{ opacity: 1, x: 0 }}     // Move to original position
                        transition={{ duration: 0.8 }}      // Animation duration
                    >
                        Empowering Your Business with Cutting-Edge Automation & AI Solutions
                    </motion.h3>
        </div>
        </div>

        <About/>
        <Products/>
        <Contact/>
        </>
    )
}

export default Home;