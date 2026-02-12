import React from 'react';

/**
 * Efecto de resplandor de fondo reutilizable
 * @param {string} className - Clases adicionales para posicionamiento (ej. 'top-0 start-0')
 * @param {string} color - Clase de color de fondo (default: 'bg-primary')
 * @param {number} size - Ancho y alto en píxeles (default: 400)
 */
export default function GlowBackground({ className = "", color = "bg-primary", size = 400, opacity = "opacity-10" }) {
    return (
        <div
            className={`glow-bg ${color} ${opacity} ${className} translate-middle`}
            style={{ width: size, height: size }}
        ></div>
    );
}
