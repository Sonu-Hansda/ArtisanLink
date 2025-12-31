import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { User } from 'lucide-react';
import './Testimonials.css';

export const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <motion.div
                    className="stats-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    {content.testimonials.stats.map((stat, i) => (
                        <div key={i} className="stat-item">
                            <h3 className="stat-value">{stat.value}</h3>
                            <p className="stat-label">{stat.label}</p>
                            {i < content.testimonials.stats.length - 1 && <div className="stat-divider" />}
                        </div>
                    ))}
                </motion.div>

                <div className="section-header">
                    <span className="section-label">Testimonials</span>
                    <h2 className="section-title">{content.testimonials.headline}</h2>
                </div>

                <div className="reviews-grid">
                    {content.testimonials.reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            className="review-card"
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                        >
                            <div className="reviewer-info">
                                <div className="reviewer-avatar">
                                    <User />
                                </div>
                                <div>
                                    <h4 className="reviewer-name">{review.author}</h4>
                                    <p className="reviewer-role">{review.role}</p>
                                </div>
                            </div>
                            <p className="review-text">"{review.text}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
