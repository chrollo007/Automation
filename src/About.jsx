import './about.css';
import img from './assets/logo.png';
import img2 from './assets/logo2.png';
import img3 from './assets/logo3.png';
import img4 from './assets/logo4.png';
import ai from './assets/Ai.png';
import prod from './assets/products.png';
import tl from './assets/tl.png';
import auto from './assets/Automation.png';
import { motion } from 'framer-motion';  // Import framer-motion

function About() {
    return (
        <>
            <div className="content">
                {/* Animated Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Who We Are
                </motion.h1>

                <div className="whoweare">
                    <div className="text">
                        {/* Animated Paragraph Text */}
                        <motion.h3
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            At GA Applications, we are revolutionizing the way businesses operate by creating cutting-edge automation tools that harness the power of the Internet of Things (IoT) and Artificial Intelligence/Machine Learning (AI/ML). Our mission is simple: to empower organizations with intelligent solutions that drive efficiency, innovation, and growth.
                        </motion.h3>

                        {/* Animated Products List */}
                        <motion.div
                            className="products"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <ul>
                                <div className="adds">
                                    <img src={auto} alt="" />
                                    <li>Automation</li>
                                </div>
                                <div className="adds">
                                    <img src={ai} alt="" />
                                    <li>AI</li>
                                </div>
                                <div className="adds">
                                    <img src={prod} alt="" />
                                    <li>Products</li>
                                </div>
                                <div className="adds">
                                    <img src={tl} alt="" />
                                    <li>Traffic Lights</li>
                                </div>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Animated Image Section */}
                    <div className="img">
                        <div className="image">
                            <motion.img
                                className="logo"
                                src={img}
                                alt="Company Logo"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            />
                            <motion.img
                                className="logo"
                                src={img2}
                                alt=""
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            />
                        </div>

                        <div className="image2">
                            <motion.img
                                className="logo"
                                src={img3}
                                alt="Company Logo"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                            />
                            <motion.img
                                className="logo"
                                src={img4}
                                alt="Company Logo"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
