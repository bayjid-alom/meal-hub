
import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="meal-footer">
            <div className="footer-container">

                {/* Brand Information */}
                <div className="footer-brand">
                    <a href="#" className="footer-logo">
                        <i className="fa-solid fa-utensils"></i>
                        Meal<span>Hub</span>
                    </a>

                    <p>
                        Discover delicious meals, explore exciting flavors,
                        and enjoy your favorite food with Meal Hub.
                        Good food, great moments.
                    </p>

                    <div className="footer-socials">
                        <a href="#" aria-label="Facebook">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#" aria-label="Twitter">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="#" aria-label="YouTube">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#meals">Explore Meals</a></li>
                        <li><a href="#why-choose-us">Why Choose Us</a></li>
                        <li><a href="#reviews">Customer Reviews</a></li>
                    </ul>
                </div>

                {/* Customer Support */}
                <div className="footer-links">
                    <h3>Customer Support</h3>
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="footer-contact">
                    <h3>Get In Touch</h3>

                    <p>
                        <i className="fa-solid fa-envelope"></i>
                        <span>support@mealhub.com</span>
                    </p>

                    <p>
                        <i className="fa-solid fa-phone"></i>
                        <span>+880 1234-567890</span>
                    </p>

                    <p>
                        <i className="fa-solid fa-location-dot"></i>
                        <span>Dhaka, Bangladesh</span>
                    </p>
                </div>

            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Meal Hub.
                    All rights reserved.
                </p>

                <p>
                    Made with <i className="fa-solid fa-heart"></i> for food lovers.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
