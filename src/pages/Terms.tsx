import React from 'react';
import '../index.css';

export const Terms: React.FC = () => {
    return (
        <div className="container" style={{ padding: '120px 20px', minHeight: '60vh' }}>
            <h1>Terms of Service</h1>
            <p style={{ marginTop: '20px', color: 'var(--text-secondary)' }}>
                Last updated: {new Date().toLocaleDateString()}
            </p>
            <div style={{ marginTop: '40px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                <p>Welcome to ArtisanLink. By accessing our website, you agree to be bound by these Terms of Service.</p>
                <h2 style={{ color: 'var(--text-primary)', marginTop: '30px', marginBottom: '15px' }}>1. Usage</h2>
                <p>Our platform connects agencies with top-tier developers. All interactions must differ to professional standards.</p>
                <h2 style={{ color: 'var(--text-primary)', marginTop: '30px', marginBottom: '15px' }}>2. Intellectual Property</h2>
                <p>All content on this website is the property of ArtisanLink unless otherwise stated.</p>
            </div>
        </div>
    );
};
