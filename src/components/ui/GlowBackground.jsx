import React from 'react';

/**
 * Reusable background glow effect
 * @param {string} className - Additional classes for positioning (e.g., 'top-0 start-0')
 * @param {string} color - Background color class (default: 'bg-primary')
 * @param {number} size - Width and height in pixels (default: 400)
 */
export default function GlowBackground({ className = "", color = "bg-primary", size = 400, opacity = "opacity-10" }) {
    return (
        <div
            className={`glow-bg ${color} ${opacity} ${className} translate-middle`}
            style={{ width: size, height: size }}
        ></div>
    );
}
