import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, linkName: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        const sectionId = linkName.toLowerCase().replace(/\s+/g, '-');

        if (sectionId === 'faq') {
            navigate('/faq');
            window.scrollTo(0, 0);
            return;
        }

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
                    <span className="logo-text">Cross Origin Labs</span>
                </Link>

                {/* Desktop Links */}
                <div className="nav-links desktop-only">
                    {content.navbar.links.map((link) => {
                        const sectionId = link.toLowerCase().replace(/\s+/g, '-');
                        return (
                            <a
                                key={link}
                                href={sectionId === 'faq' ? '/faq' : `/#${sectionId}`}
                                className="nav-link"
                                onClick={(e) => handleNavClick(e, link)}
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
                                    href={sectionId === 'faq' ? '/faq' : `/#${sectionId}`}
                                    className="mobile-nav-link"
                                    onClick={(e) => handleNavClick(e, link)}
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
