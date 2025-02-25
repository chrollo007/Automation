import { useState } from 'react';
import './contact.css'
import {} from '@react-google-maps/api'
import bgp from './assets/bgp.jpg'

function Contact(){

    const[formData,setFormData]=useState({
        name:"",
        email:"",
        message:"",
    })

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }

    return(
        <>
        <div className='cards'>
            <img src={bgp} alt="" />
        <h1>Contact</h1>
       
        <div className="card">

        <div className="card-1">
                <h1>Contact Info.</h1>
                
                <div className="section">
                    <h3>Reach Us.</h3>
                    <h4>home@gaapplications.com</h4>
                </div>
                
                <div className="section">
                    <h3>Call</h3>
                    <h4>+91 8340291901</h4>
                </div>
                
                <div className="section">
                    <h3>Visit Us.</h3>
                    <h4>Company</h4>
                    <h4>24, A Block, Defence Colony,</h4>
                    <h4>Hisar, Haryana 125001</h4>
                </div>
                </div>


            <div className="card-2">
                <h1>Get in Touch</h1>
                <form action="">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email} onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message} onChange={handleChange}
                    />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
           
        </div>
        </div>
        </>
    )
}

export default Contact;