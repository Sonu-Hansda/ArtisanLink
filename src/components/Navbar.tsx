import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { content } from '../data/content';
import './Navbar.css';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        if (location.pathname !== '/') {
            navigate(`/#${sectionId}`);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                // Optional: Update URL without jump
                window.history.pushState(null, '', `#${sectionId}`);
            }
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="logo">
                    <Hexagon className="logo-icon" size={32} />
                    <span className="logo-text">ArtisanLink</span>
                </Link>

                {/* Desktop Links */}
                <div className="nav-links desktop-only">
                    {content.navbar.links.map((link) => {
                        const sectionId = link.toLowerCase().replace(/\s+/g, '-');
                        return (
                            <a
                                key={link}
                                href={`/#${sectionId}`}
                                className="nav-link"
                                onClick={(e) => handleNavClick(e, sectionId)}
                            >
                                {link}
                            </a>
                        );
                    })}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        {content.navbar.links.map((link) => {
                            const sectionId = link.toLowerCase().replace(/\s+/g, '-');
                            return (
                                <a
                                    key={link}
                                    href={`/#${sectionId}`}
                                    className="mobile-nav-link"
                                    onClick={(e) => handleNavClick(e, sectionId)}
                                >
                                    {link}
                                </a>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
