import { motion } from 'framer-motion';

export default function StaggerContainer({
    children,
    staggerChildren = 0.1,
    delayChildren = 0,
    className = '',
    viewport = { once: true, margin: '-50px' }
}) {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren,
                delayChildren
            }
        }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className={className}
        >
            {children}
        </motion.div>
    );
}
