import React from 'react';

export const Privacy: React.FC = () => {
    return (
        <div className="container" style={{ padding: '120px 20px', minHeight: '60vh' }}>
            <h1>Privacy Policy</h1>
            <p style={{ marginTop: '20px', color: 'var(--text-secondary)' }}>
                Last updated: {new Date().toLocaleDateString()}
            </p>
            <div style={{ marginTop: '40px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                <p>Cross Origin Labs respects your privacy. This policy explains how we handle your data.</p>
                <h2 style={{ color: 'var(--text-primary)', marginTop: '30px', marginBottom: '15px' }}>1. Data Collection</h2>
                <p>We collect minimal data necessary to provide our services, such as contact information when you reach out to us.</p>
                <h2 style={{ color: 'var(--text-primary)', marginTop: '30px', marginBottom: '15px' }}>2. Data Protection</h2>
                <p>We implement security measures to maintain the safety of your personal information.</p>
            </div>
        </div>
    );
};
