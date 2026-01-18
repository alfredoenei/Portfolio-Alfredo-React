import React from 'react';

/**
 * Standard Section Wrapper
 * @param {string} id - Section ID for navigation
 * @param {string} className - Additional classes
 * @param {React.ReactNode} children - Section content
 */
export default function Section({ id, className = "", children }) {
    return (
        <section id={id} className={`py-5 position-relative overflow-hidden ${className}`}>
            {children}
        </section>
    );
}
