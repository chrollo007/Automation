import './navbar.css'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion';


function Navbar(){
    return(
        <>
         <motion.div
            className="nav"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ul>
                <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <Link to="/">Home</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <Link to="/about">About us</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <Link to="/contact">Contact</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <Link to="/products">Products</Link>
                </motion.li>
            </ul>
        </motion.div>
        </>
    )
}

export default Navbar;