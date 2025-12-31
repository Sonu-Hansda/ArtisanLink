import React from 'react';

export const FAQ: React.FC = () => {
    return (
        <div className="container" style={{ padding: '120px 20px', minHeight: '60vh' }}>
            <h1>Frequently Asked Questions</h1>
            <div style={{ marginTop: '40px' }}>
                <div style={{ marginBottom: '30px' }}>
                    <h3 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>What services do you offer?</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>We specialize in connecting agencies with elite pre-vetted developers and designers.</p>
                </div>
                <div style={{ marginBottom: '30px' }}>
                    <h3 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>How does the vetting process work?</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Our talent goes through rigorous technical assessments and behavioral interviews.</p>
                </div>
                <div style={{ marginBottom: '30px' }}>
                    <h3 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>Can I hire for a short-term project?</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Yes, we support both long-term contracts and project-based engagements.</p>
                </div>
            </div>
        </div>
    );
};
