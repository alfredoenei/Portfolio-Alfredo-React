import { motion } from 'framer-motion';

export default function FadeIn({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.5,
    className = '',
    viewport = { once: true, margin: '-50px' }
}) {
    const directions = {
        up: { y: 20, x: 0 },
        down: { y: -20, x: 0 },
        left: { x: 20, y: 0 },
        right: { x: -20, y: 0 },
        none: { x: 0, y: 0 }
    };

    const variants = {
        hidden: {
            opacity: 0,
            ...directions[direction]
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: 'easeOut'
            }
        }
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className={className}
        >
            {children}
        </motion.div>
    );
}
