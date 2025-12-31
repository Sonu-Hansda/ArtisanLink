import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Button } from './Button';
import { content } from '../data/content';
import './Hero.css';

export const Hero: React.FC = () => {
    return (
        <section className="hero">
            {/* Background Glow */}
            <div className="hero-glow" />

            <div className="container hero-container">
                {/* Dotted Grid Background */}
                <div className="hero-grid" />

                <motion.h1
                    className="hero-headline"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {content.hero.headline.split('\n').map((line, i) => (
                        <span key={i} className="d-block">{line}</span>
                    ))}
                </motion.h1>

                <motion.p
                    className="hero-subhead"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {content.hero.subhead}
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Button
                        variant="secondary"
                        className="btn-icon-right"
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <Play size={16} fill="currentColor" /> See How it Works
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        {content.hero.cta}
                    </Button>
                </motion.div>

                <motion.div
                    className="hero-trusted"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <p className="trusted-label">{content.hero.trustedBy}</p>
                    <div className="trusted-logos">
                        {content.hero.logos.map((logo) => (
                            <span key={logo} className="trusted-logo">{logo}</span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
