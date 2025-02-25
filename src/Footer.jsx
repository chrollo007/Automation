import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h1>Automation</h1>
                    <h3>Empowering Your Business with Cutting-Edge Automation & AI Solutions</h3>
                </div>

                <div className="footer-list">
                    <h3>Company</h3>
                    <ul>
                        <Link to="/contact"><li>Contact</li></Link>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/"><li>Terms of Service</li></Link>
                        <Link to="/"><li>Privacy Policy</li></Link>
                    </ul>
                </div>

                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Automation. All Rights Reserved.</p>
                <p>Contact us: <a href="mailto:info@automation.com">info@automation.com</a></p>
            </div>
        </div>
    );
}

export default Footer;
