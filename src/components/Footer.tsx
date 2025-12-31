import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <Hexagon className="footer-logo-icon" size={24} />
                    <span className="footer-brand-name">ArtisanLink</span>
                </div>

                <div className="footer-links">
                    <Link to="/terms" className="footer-link">Terms</Link>
                    <Link to="/privacy" className="footer-link">Privacy</Link>
                    <Link to="/faq" className="footer-link">FAQ</Link>
                </div>

                <p className="copyright">
                    © {currentYear} ArtisanLink. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
