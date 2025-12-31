import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
// Ensure you have content defined in your data file, or update the interface if needed.

export const FAQ: React.FC = () => {
    return (
        <div className="container" style={{ padding: '120px 20px', minHeight: '80vh' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="section-header"
            >
                <h1 className="section-title">{content.faq.title}</h1>
            </motion.div>

            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {content.faq.items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-subtle)',
                            padding: '32px',
                            borderRadius: '16px',
                        }}
                    >
                        <h3 style={{ color: 'var(--text-primary)', marginBottom: '12px', fontSize: '1.25rem', fontWeight: 600 }}>
                            {item.question}
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            {item.answer}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
