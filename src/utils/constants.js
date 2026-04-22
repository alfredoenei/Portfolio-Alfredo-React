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
    title: "StreamMatch AI",
    key: "streammatch",
    description: "Curador de streaming inteligente con IA que elimina la parálisis de elección.",
    tags: ["React 19", "Node.js", "OpenAI API", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/alfredoenei/Streammatch-AI",
    live: "https://streammatch-ai.netlify.app",
    image: "/assets/projects/streammatch-mockup.webp",
    imagePlaceholder: "StreamMatch AI",
    longDescription: "Plataforma de próxima generación con análisis de intención semántica. Integra OpenAI para curaduría narrativa y una arquitectura resiliente con Circuit Breakers para manejar APIs externas. Diseño premium con Dynamic UI."
  },
  {
    title: "CareerOps",
    key: "careerops",
    description: "CRM Kanban y Extensión Chrome para gestión estratégica de búsqueda de empleo.",
    tags: ["React", "Node.js", "MongoDB", "Chrome API", "JWT"],
    github: "https://github.com/alfredoenei/CarreerOps",
    image: "/assets/projects/gestor-tareas.png",
    imagePlaceholder: "CareerOps",
    longDescription: "Sistema CRM avanzado con tablero Kanban interactivo y extensión de Chrome (Manifest V3) para scraping híbrido de ofertas. Implementa seguridad con JWT y persistencia en MongoDB Atlas."
  },
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
