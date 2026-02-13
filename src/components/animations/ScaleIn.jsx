import { motion } from 'framer-motion';

export default function ScaleIn({
    children,
    delay = 0,
    duration = 0.4,
    className = '',
    viewport = { once: true }
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{
                duration,
                delay,
                ease: [0.175, 0.885, 0.32, 1.275] // spring-like ease
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
