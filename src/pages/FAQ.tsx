import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { content } from '../data/content';

export const FAQ: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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

            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {content.faq.items.map((item, index) => {
                    const isOpen = expandedIndex === index;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-subtle)',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                cursor: 'pointer'
                            }}
                            onClick={() => setExpandedIndex(isOpen ? null : index)}
                        >
                            <div style={{
                                padding: '24px 32px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '16px'
                            }}>
                                <h3 style={{
                                    color: isOpen ? 'var(--accent-lime)' : 'var(--text-primary)',
                                    fontSize: '1.25rem',
                                    fontWeight: 600,
                                    margin: 0,
                                    transition: 'color 0.3s'
                                }}>
                                    {item.question}
                                </h3>
                                <motion.div
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown size={24} color={isOpen ? 'var(--accent-lime)' : 'var(--text-secondary)'} />
                                </motion.div>
                            </div>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div style={{ padding: '0 32px 32px 32px' }}>
                                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                                                {item.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};
