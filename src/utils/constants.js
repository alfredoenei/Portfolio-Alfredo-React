export const NAV_LINKS = [
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export const HERO_STEPS = [
  { id: 1, text: "Estrategia y Arquitectura 📐", completed: true, color: "from-blue-600 to-cyan-500" }, // Azul/Cyan
  { id: 2, text: "Desarrollo Frontend & Backend 💻", completed: true, color: "from-purple-600 to-pink-500" }, // Púrpura/Rosa
  { id: 3, text: "Optimización y Despliegue 🚀", completed: true, color: "from-green-600 to-teal-500" }, // Verde/Teal
];


export const PROJECTS = [
  {
    title: "Web de Arte",
    description: "Plataforma para exhibición de arte con gestión de contenido dinámico.",
    tags: ["MongoDB", "Angular", "Express", "Node.js"],
    link: "#",
    github: "https://github.com/alfredoenei",
    image: "/assets/projects/web-de-arte.gif",
    imagePlaceholder: "Web de Arte",
    longDescription: "Una plataforma digital sofisticada diseñada para galerías y artistas. Construida sobre el stack MEAN (MongoDB, Express, Angular, Node.js), ofrece una gestión de contenido dinámica, permitiendo a los administradores curar exposiciones virtuales con facilidad. La interfaz de usuario, rápida y responsiva, asegura que las obras de arte sean las protagonistas, proporcionando una experiencia de visualización inmersiva."
  },
  {
    title: "Marketplace Simulation",
    description: "Simulación completa de una plataforma de ventas con carrito y pagos.",
    tags: ["React", "Bootstrap", "Vite"],
    github: "https://github.com/alfredoenei/React-saas-landing",
    image: "/assets/projects/marketplace.gif",
    imagePlaceholder: "Marketplace",
    longDescription: "Este proyecto es una simulación integral de un entorno de comercio electrónico moderno. Desarrollado con React y Vite para un rendimiento óptimo, integra un sistema de carrito de compras reactivo, gestión de estado global, y una pasarela de pagos simulada. La interfaz, diseñada con Bootstrap, asegura una experiencia de usuario fluida y responsiva, permitiendo filtrar productos, ver detalles en profundidad y completar transacciones simuladas."
  },
];

export const CONTACT_REASONS = [
  "Discutir oportunidades laborales",
  "Colaboración en proyectos",
  "Consultas sobre desarrollo web"
];

export const SOCIAL_LINKS = {
  github: "https://github.com/alfredoenei",
  linkedin: "https://www.linkedin.com/in/alfredo-enei-61b61034b"
};
