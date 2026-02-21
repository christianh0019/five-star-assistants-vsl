import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.8,
                ease: [0.21, 1.11, 0.81, 0.99], // Spring-like feel without being too bouncy
                delay: delay
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
