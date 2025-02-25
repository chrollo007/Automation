import './home.css'
import img from './assets/logo.png'
import img2 from './assets/logo2.png'
import { useState } from 'react'
import About from './About'
import Contact from './Contact'
import video from './assets/video2.mp4'
import Products from './Product'


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
            <h1><span class="welcome">Welcome to</span> <span class="company-name">GA Applications</span></h1>
           </div>
           <div className='content-written'>
                <h3>Empowering Your Business with Cutting-Edge Automation & AI Solutions</h3>
           </div>
           <div className='website'>
           </div>
        </div>
        <About/>
        <Products/>
        <Contact/>
        </>
    )
}

export default Home;