*Leer esto en otros idiomas: [English](README.md)*

# Portfolio — Fullstack Web Developer

**Demo en vivo:** [alfredo-enei-portfolio.netlify.app](https://alfredo-enei-portfolio.netlify.app/)

Un portfolio profesional e interactivo diseñado como una Single Page Application (SPA) moderna. Este proyecto sirve tanto como presentación de mi trabajo como demostración de mis habilidades en frontend, con enfoque en rendimiento, arquitectura limpia y experiencia de usuario.

---

## Stack Tecnológico

- **Framework:** React 19
- **Build Tool:** Vite 7
- **Estilos:** CSS personalizado con clases de utilidad de Bootstrap 5
- **Animaciones:** Framer Motion
- **Gestión de Estado:** React Context API (para i18n)

## Funcionalidades Clave

- **Arquitectura Basada en Componentes:** Diseño modular que prioriza la reutilización y el código limpio, con estricta separación entre componentes visuales y secciones lógicas.
- **Rendimiento Optimizado:** Implementación de lazy loading en React (`React.lazy` y `Suspense`) para asegurar una carga inicial extremadamente rápida.
- **Internacionalización (i18n):** Soporte nativo para múltiples idiomas (Español/Inglés) con persistencia automática en el cliente mediante `localStorage`.
- **Diseño Moderno y Responsivo:** Estética inspirada en interfaces terminal/dark-mode que incorpora glassmorphism y micro-animaciones sin sacrificar la velocidad.
- **Despliegue Continuo (CI/CD):** Actualizaciones integradas automáticamente configuradas con Netlify.

## Estructura del Proyecto

```text
src/
├── components/     # Elementos de UI reutilizables
├── context/        # Proveedores de estado global (LanguageContext)
├── sections/       # Vistas principales (Projects, Experience, TechStack, etc.)
├── styles/         # CSS global y variables de diseño
└── utils/          # Constantes, traducciones y funciones helper
```

## Ejecución Local

Para correr el entorno de desarrollo en local:

```bash
# Clonar el repositorio
git clone https://github.com/alfredoenei/React-saas-landing.git
cd React-saas-landing

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Generar build de producción
npm run build
```

## Contacto

- **LinkedIn:** [linkedin.com/in/alfredo-enei-61b61034b](https://www.linkedin.com/in/alfredo-enei-61b61034b)
- **GitHub:** [github.com/alfredoenei](https://github.com/alfredoenei)
