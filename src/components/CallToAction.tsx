import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { content } from '../data/content';
import './CallToAction.css';

export const CallToAction: React.FC = () => {
    return (
        <section id="contact" className="cta-section">
            <div className="container cta-container">
                <motion.div
                    className="cta-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="cta-headline">{content.cta.headline}</h2>
                    <p className="cta-subhead">{content.cta.subhead}</p>

                    <div className="cta-form-wrapper">
                        {/* Simple email capture form visual */}
                        <div className="email-input-group">
                            <input type="email" placeholder="email@company.com" className="cta-input" />
                            <Button variant="primary" onClick={() => window.location.href = 'mailto:hello@artisanlink.global'}>
                                {content.cta.button}
                            </Button>
                        </div>
                    </div>
                </motion.div>

                {/* Background glow effect */}
                <div className="cta-glow" />
            </div>
        </section>
    );
};
