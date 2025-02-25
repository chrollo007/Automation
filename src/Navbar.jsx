import './navbar.css'
import {Link} from 'react-router-dom'


function Navbar(){
    return(
        <>
        <div className="nav">
            <Link to='/'><h1>Automation</h1></Link>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About us</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/products"><li>Products</li></Link>
            </ul>
        </div>
        </>
    )
}

export default Navbar;