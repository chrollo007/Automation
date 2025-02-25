import { useState } from 'react';
import './contact.css';
import {} from '@react-google-maps/api';
import bgp from './assets/bgp.jpg';
import { motion } from 'framer-motion'; // Import framer-motion

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <>
            <div className="cards">
                {/* Animated Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Contact
                </motion.h1>

                <div className="card">

                    {/* Animated Contact Info */}
                    <motion.div
                        className="card-1"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
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
                    </motion.div>

                    {/* Animated Form Section */}
                    <motion.div
                        className="card-2"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Get in Touch</h1>
                        <form action="">
                            <div>
                                <label htmlFor="name">Name</label>
                                <motion.input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <motion.input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <motion.textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                Submit
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </>
    );
}

export default Contact;
