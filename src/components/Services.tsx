import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, PenTool, Video, Palette, TrendingUp } from 'lucide-react';
import { content } from '../data/content';
import './Services.css';

export const Services: React.FC = () => {
    const iconMap = [Globe, Smartphone, PenTool, Video, Palette, TrendingUp];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Our Process</span>
                    <h2 className="section-title">{content.services.headline}</h2>
                </motion.div>

                <div className="services-grid">
                    {content.services.items.map((item, index) => {
                        const Icon = iconMap[index];
                        return (
                            <motion.div
                                key={index}
                                className="service-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="service-icon">
                                    <Icon size={32} />
                                </div>
                                <h3 className="service-title">{item.title}</h3>
                                <p className="service-desc">{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
