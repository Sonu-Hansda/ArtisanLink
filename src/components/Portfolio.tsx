import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { content } from '../data/content';
import './Portfolio.css';

const BrowserFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`browser-frame ${className}`}>
        <div className="browser-header">
            <div className="browser-dots">
                <div className="browser-dot red" />
                <div className="browser-dot yellow" />
                <div className="browser-dot green" />
            </div>
            <div className="browser-address-bar">
                <div className="browser-lock" />
                <div className="browser-url-line" />
            </div>
        </div>
        <div className="browser-content">
            {children}
        </div>
    </div>
);

export const Portfolio: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const projects = content.portfolio.projects;

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % projects.length);
        }, 5000); // Auto-switch every 5 seconds

        return () => clearInterval(timer);
    }, [projects.length]);

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Portfolio</span>
                    <h2 className="section-title">{content.portfolio.headline}</h2>
                    <p className="section-subhead">{content.portfolio.subhead}</p>
                </div>

                <div className="carousel-container">
                    {/* Main Large View */}
                    <div className="main-project-display">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="main-browser-wrapper"
                            >
                                <BrowserFrame className="featured-browser">
                                    <div className="browser-image-container">
                                        <img
                                            src={projects[activeIndex].image}
                                            alt={projects[activeIndex].name}
                                            className="project-image"
                                        />
                                        <div className="project-overlay">
                                            <div>
                                                <h3 className="project-title">{projects[activeIndex].name}</h3>
                                                <p className="project-category">{projects[activeIndex].category}</p>
                                            </div>
                                            {projects[activeIndex].url && (
                                                <a href={projects[activeIndex].url} target="_blank" rel="noopener noreferrer" className="project-link">
                                                    Visit Site <ExternalLink size={16} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </BrowserFrame>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Thumbnails */}
                    <div className="thumbnails-track">
                        {projects.map((project, index) => (
                            <button
                                key={index}
                                className={`thumbnail-btn ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="thumbnail-frame">
                                    <div className="thumbnail-header">
                                        <div className="thumbnail-dot" />
                                        <div className="thumbnail-dot" />
                                    </div>
                                    <img src={project.image} alt={project.name} className="thumbnail-img" />
                                </div>
                                <span className="thumbnail-label">{project.name}</span>
                                {index === activeIndex && (
                                    <motion.div
                                        layoutId="active-glow"
                                        className="thumbnail-active-indicator"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
