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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.7,
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
