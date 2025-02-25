import './about.css'
import img from './assets/logo.png'
import img2 from './assets/logo2.png'
import img3 from './assets/logo3.png'
import img4 from './assets/logo4.png'
import ai from './assets/Ai.png'
import prod from './assets/products.png'
import tl from './assets/tl.png'
import auto from './assets/Automation.png'

function About(){
    return(
        <>
         <div className="content">
                    <h1>Who We Are</h1>
                    <div className='whoweare'>
                    <div className="text">
                            <h3>
                            At Automation, we are revolutionizing the way businesses operate by creating cutting-edge automation tools that harness the power of the Internet of Things (IoT) and Artificial Intelligence/Machine Learning (AI/ML). Our mission is simple: to empower organizations with intelligent solutions that drive efficiency, innovation, and growth.
                            </h3>
                            <div className='products'>
                            <ul>
                               
                            <div className='adds'><img src={auto} alt="" /><li>Automation</li></div>
                            <div className='adds'><img src={ai} alt="" /><li>Ai</li></div>
                            <div className='adds'><img src={prod} alt="" /><li>Products</li></div>
                            <div className='adds'><img src={tl} alt="" /><li>Traffic lights</li></div>
                            </ul>
                            </div>
                        </div>
                        <div className='img'>
                        <div className="image">
                            <img className="logo" src={img} alt="Company Logo" />
                            <img className="logo" src={img2} alt="" />
                        </div>
                        <div className='image2'>
                        <img className="logo" src={img3} alt="Company Logo" />
                        <img className="logo" src={img4} alt="Company Logo" />
                        </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default About;