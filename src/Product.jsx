import './product.css';
import tl from './assets/tl.png';
import iot from './assets/IOT-enable.png';
import cctv from './assets/cctv.png';
import { motion } from 'framer-motion'; // Import motion

function Products() {
    return (
        <>
            <div className='solutions'>
                {/* Animated Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Our Products
                </motion.h1>

                <div className='list'>
                    <ul>
                        {/* Animated Product 1 */}
                        <motion.div
                            className='sol'
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <li>Smart Traffic Lights</li>
                            <img src={tl} alt="Smart Traffic Lights" />
                            <h3>
                                Smart Traffic Lights: Transform your city's traffic flow with our AI-powered smart traffic lights. Our system uses real-time traffic data, adjusting signals dynamically to improve traffic flow, reduce congestion, and enhance overall safety.
                            </h3>
                        </motion.div>

                        {/* Animated Product 2 */}
                        <motion.div
                            className='sol'
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <li>IOT Enabled Solutions</li>
                            <img src={iot} alt="IOT Enabled Solutions" />
                            <h3>
                                IoT-enabled Automation: Our IoT tools connect various city infrastructure elements to optimize performance. We help cities manage energy consumption, monitor air quality, and ensure the efficient functioning of traffic systems.
                            </h3>
                        </motion.div>

                        {/* Animated Product 3 */}
                        <motion.div
                            className='sol'
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <li>AI Powered CCTV Cameras</li>
                            <img src={cctv} alt="AI Powered CCTV Cameras" />
                            <h3>
                                AI-powered CCTV cameras enhance security with features like facial recognition, smart motion detection, real-time alerts, and cloud integration, offering reliable, efficient surveillance with reduced false alarms for homes, offices, and public spaces.
                            </h3>
                        </motion.div>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Products;
