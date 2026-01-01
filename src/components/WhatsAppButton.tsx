import React from 'react';
import { motion } from 'framer-motion';
import whatsappIcon from '../assets/whatsapp.png';


export const WhatsAppButton: React.FC = () => {
    return (
        <motion.a
            href="https://wa.me/919341884406"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <img
                src={whatsappIcon}
                alt="WhatsApp"
                style={{ width: '48px', height: '48px', objectFit: 'contain' }}
            />
        </motion.a>
    );
};
