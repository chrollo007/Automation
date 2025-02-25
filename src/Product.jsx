import './product.css'
import tl from './assets/tl.png'
import iot from './assets/IOT-enable.png'
function Products(){
    return(
        <>
        <div className='solutions'>
            <h1>Our Products</h1>
            <div className='list'>
                <ul>
                    <div className='sol'><li>Smart Traffic Lights</li><img src={tl} alt="" />
                    <h3> Smart Traffic Lights Transform your city's traffic flow with our AI-powered smart traffic lights. Our system uses real-time traffic data, adjusting signals dynamically to improve traffic flow, reduce congestion, and enhance overall safety.</h3>
                    </div>
                    <div className='sol'><li>IOT Enabled Solutions</li><img src={iot} alt="" />
                    <h3>IoT-enabled Automation Our IoT tools connect various city infrastructure elements to optimize performance. We help cities manage energy consumption, monitor air quality, and ensure the efficient functioning of traffic systems.</h3>
                    </div>
                </ul>

            </div>

        </div>
        </>
    )
}

export default Products;