import React from 'react';

/**
 * Contenedor de Sección Estándar
 * @param {string} id - ID de la sección para navegación
 * @param {string} className - Clases adicionales
 * @param {React.ReactNode} children - Contenido de la sección
 */
export default function Section({ id, className = "", children }) {
    return (
        <section id={id} className={`py-5 position-relative overflow-hidden ${className}`}>
            {children}
        </section>
    );
}
