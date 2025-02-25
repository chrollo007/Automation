import './footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h1>GA Applications</h1>
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
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Automation. All Rights Reserved.</p>
                <p>Contact us: <a href="mailto:home@gaapplications.com">home@gaapplications.com</a></p>
            </div>
        </div>
    );
}

export default Footer;
