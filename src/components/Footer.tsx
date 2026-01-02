import React from 'react';
import { content } from '../data/content';
import './Footer.css';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="footer-brand-name">Cross Origin Labs</span>
                    </div>

                    <div className="footer-links">
                        {content.footer.links.map((link) => (
                            <a key={link} href={`/${link.toLowerCase()}`} className="footer-link">
                                {link}
                            </a>
                        ))}
                    </div>

                    <div className="footer-address">
                        <p style={{ whiteSpace: 'pre-line', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '8px' }}>
                            {content.footer.address}
                        </p>
                        {'email' in content.footer && (
                            <a
                                href={`mailto:${(content.footer as any).email}`}
                                style={{ display: 'block', color: 'var(--text-primary)', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 500 }}
                            >
                                {(content.footer as any).email}
                            </a>
                        )}
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        © {currentYear} Cross Origin Labs. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
