import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { content } from '../data/content';
import './CallToAction.css';

export const CallToAction: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleGetStarted = () => {
        const recipient = 'business.crossoriginlabs@gmail.com';
        const subject = 'Project Inquiry';
        const body = `Hi Cross Origin Labs Team,\n\nI am interested in your services and would like to discuss a potential project.\n\nMy email is: ${email}\n\nLooking forward to hearing from you.`;

        window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

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
                            <input
                                type="email"
                                placeholder="email@company.com"
                                className="cta-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Button variant="primary" onClick={handleGetStarted}>
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
