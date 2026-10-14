import React from 'react';
import './whyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <section className="why-choose-section">
            <div className="why-choose-header">
                <span className="section-label">WHY MEAL HUB</span>
                <h2>Why Choose Us?</h2>
                <p>
                    We bring delicious food, quality ingredients, and a
                    delightful dining experience right to your table.
                </p>
            </div>

            <div className="features-container">
                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fa-solid fa-leaf"></i>
                    </div>
                    <h3>Fresh Ingredients</h3>
                    <p>
                        We use fresh, quality ingredients to make every
                        meal delicious and satisfying.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fa-solid fa-truck-fast"></i>
                    </div>
                    <h3>Fast Delivery</h3>
                    <p>
                        Get your favorite meals delivered to your door
                        quickly and conveniently.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fa-solid fa-utensils"></i>
                    </div>
                    <h3>Delicious Meals</h3>
                    <p>
                        Explore a variety of tasty dishes made to satisfy
                        your cravings.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fa-solid fa-heart"></i>
                    </div>
                    <h3>Made with Care</h3>
                    <p>
                        Your satisfaction matters to us, and we make
                        every meal experience special.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
