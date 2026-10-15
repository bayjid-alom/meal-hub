
import React from 'react';
import './customerReview.css';

const CustomerReview = () => {
    const reviews = [
        {
            id: 1,
            name: 'Sarah Ahmed',
            role: 'Regular Customer',
            rating: 5,
            review: 'The food was absolutely delicious! Everything arrived fresh and perfectly packed. I will definitely order again.',
            initial: 'S'
        },
        {
            id: 2,
            name: 'Rahim Hasan',
            role: 'Food Lover',
            rating: 5,
            review: 'Amazing taste and quick delivery. Meal Hub has become my favorite place to order delicious meals.',
            initial: 'R'
        },
        {
            id: 3,
            name: 'Nusrat Jahan',
            role: 'Happy Customer',
            rating: 5,
            review: 'Great food quality, reasonable prices, and excellent service. The whole ordering experience was smooth.',
            initial: 'N'
        }
    ];

    return (
        <section className="customer-review-section">
            <div className="customer-review-header">
                <span className="section-label">CUSTOMER REVIEWS</span>
                <h2>What Our Customers Say</h2>
                <p>
                    Our customers make Meal Hub special. Read their
                    experiences and discover why they love our food.
                </p>
            </div>

            <div className="reviews-container">
                {reviews.map((review) => (
                    <div className="review-card" key={review.id}>
                        <div className="review-stars">
                            {Array.from({ length: review.rating }).map((_, index) => (
                                <i className="fa-solid fa-star" key={index}></i>
                            ))}
                        </div>

                        <p className="review-text">
                            "{review.review}"
                        </p>

                        <div className="review-user">
                            <div className="review-avatar">
                                {review.initial}
                            </div>

                            <div className="review-user-info">
                                <h3>{review.name}</h3>
                                <span>{review.role}</span>
                            </div>

                            <i className="fa-solid fa-quote-right review-quote"></i>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CustomerReview;
