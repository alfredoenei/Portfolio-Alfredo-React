export const NAV_LINKS = [
  { href: "#projects", key: "nav.projects" },
  { href: "#contact", key: "nav.contact" },
];

export const HERO_STEPS = [
  { id: 1, text: "Estrategia y Arquitectura 📐", key: "strategy", completed: true, color: "from-blue-600 to-cyan-500" }, // Azul / Cian
  { id: 2, text: "Desarrollo Frontend & Backend 💻", key: "development", completed: true, color: "from-purple-600 to-pink-500" }, // Púrpura / Rosa
  { id: 3, text: "Optimización y Despliegue 🚀", key: "optimization", completed: true, color: "from-green-600 to-teal-500" }, // Verde / Verde Azulado
];


export const PROJECTS = [
  {
    title: "Web de Arte",
    key: "artWeb",
    description: "Plataforma para exhibición de arte con gestión de contenido dinámico.",
    tags: ["MongoDB", "Angular", "Express", "Node.js"],
    link: "https://tfg-blog-arte.netlify.app",
    live: "https://tfg-blog-arte.netlify.app",
    github: "https://github.com/alfredoenei/TFG-BLOG_ARTE",
    image: "/assets/projects/web-de-arte.gif",
    imagePlaceholder: "Web de Arte",
    longDescription: "Una plataforma digital sofisticada diseñada para galerías y artistas. Construida sobre el stack MEAN (MongoDB, Express, Angular, Node.js), ofrece una gestión de contenido dinámica, permitiendo a los administradores curar exposiciones virtuales con facilidad. La interfaz de usuario, rápida y responsiva, asegura que las obras de arte sean las protagonistas, proporcionando una experiencia de visualización inmersiva."
  },
  {
    title: "Marketplace Simulation",
    key: "marketplace",
    description: "Simulación completa de una plataforma de ventas con carrito y pagos.",
    tags: ["React", "Bootstrap", "Vite"],
    github: "https://github.com/alfredoenei/E-commerce-Fullstack",
    image: "/assets/projects/marketplace.gif",
    imagePlaceholder: "Marketplace",
    longDescription: "Este proyecto es una simulación integral de un entorno de comercio electrónico moderno. Desarrollado con React y Vite para un rendimiento óptimo, integra un sistema de carrito de compras reactivo, gestión de estado global, y una pasarela de pagos simulada. La interfaz, diseñada con Bootstrap, asegura una experiencia de usuario fluida y responsiva, permitiendo filtrar productos, ver detalles en profundidad y completar transacciones simuladas."
  },
  {
    title: "Gestor de Tareas Kanban",
    key: "kanban",
    description: "Tablero Kanban profesional con Drag & Drop, diseño Glassmorphism y gestión completa de tareas.",
    tags: ["React", "Node.js", "Express", "MongoDB", "dnd-kit", "Framer Motion"],
    github: "https://github.com/alfredoenei/Gestor-De-Tareas",
    live: "https://gestor-de-tareas-alfredo.netlify.app",
    image: "/assets/projects/gestor-tareas.png",
    imagePlaceholder: "Kanban Pro",
    longDescription: "Aplicación MERN Full-Stack de gestión de tareas con tablero Kanban interactivo. Migré el sistema de Drag & Drop a dnd-kit para lograr una fluidez de 60fps con detección de colisiones por centro. La interfaz implementa un diseño Glassmorphism con prioridades visuales (brillos reactivos por nivel), etiquetas inteligentes y acciones masivas por columna. Backend con autenticación JWT y persistencia completa en MongoDB Atlas."
  },
];

export const CONTACT_REASONS = [
  "contact.reasons.jobs",
  "contact.reasons.collab",
  "contact.reasons.consulting"
];

export const SOCIAL_LINKS = {
  github: "https://github.com/alfredoenei",
  linkedin: "https://www.linkedin.com/in/alfredo-enei-61b61034b"
};
