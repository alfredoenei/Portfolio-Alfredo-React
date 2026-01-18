export const NAV_LINKS = [
  { href: "#features", label: "Características" },
  { href: "#pricing", label: "Servicios" },
  { href: "#faq", label: "FAQ" },
];

export const HERO_STEPS = [
  { id: 1, text: "Comprender tu visión y necesidades reales 🧠", completed: true },
  { id: 2, text: "Diseñar una estrategia escalable 📐", completed: true },
  { id: 3, text: "Desarrollo limpio y comunicación constante 🤝", completed: false },
  { id: 4, text: "Lanzamiento y soporte continuo 🚀", completed: false },
];

export const FEATURES = [
  {
    title: "Arquitectura Escalable",
    text: "Diseño modular y desacoplado listo para crecer. Evita la deuda técnica desde el primer commit.",
    icon: "bi-diagram-3-fill",
    color: "text-warning"
  },
  {
    title: "Responsive & Mobile First",
    text: "Experiencia de usuario fluida en cualquier dispositivo, optimizada con grillas modernas y CSS robusto.",
    icon: "bi-phone-fill",
    color: "text-info"
  },
  {
    title: "Sistemas de Diseño",
    text: "Implementación de tokens y componentes atómicos para una consistencia visual impecable y fácil mantenimiento.",
    icon: "bi-palette-fill",
    color: "text-primary"
  },
  {
    title: "Rendimiento y SEO",
    text: "Mejores prácticas de Web Vitals, carga diferida y semántica HTML para máxima visibilidad y velocidad.",
    icon: "bi-speedometer2",
    color: "text-success"
  },
  {
    title: "CI/CD & DevOps Ready",
    text: "Flujos de trabajo automatizados para despliegues seguros y rápidos en plataformas modernas como Vercel.",
    icon: "bi-rocket-fill",
    color: "text-danger"
  },
  {
    title: "Código Documentado",
    text: "Transparencia total. Código limpio, tipado y comentado para facilitar la colaboración en equipo.",
    icon: "bi-code-square",
    color: "text-secondary"
  },
];

export const PRICING_PLANS = [
  {
    name: "Desarrollo MVP",
    price: "MVP",
    period: "/sprint",
    desc: "Para startups que necesitan lanzar rápido y validar.",
    features: ["Prototipado rápido en React", "Arquitectura escalable desde el día 1", "Entrega continua (CI/CD)"],
    cta: "Discutir MVP",
    highlighted: false,
  },
  {
    name: "Full Stack Partner",
    price: "Senior",
    period: "/dev",
    desc: "Colaboración a largo plazo para productos maduros.",
    features: ["Desarrollo de features complejas", "Refactorización y Deuda Técnica", "Optimización de rendimiento", "Integración de APIs y Backend"],
    cta: "Ver disponibilidad",
    highlighted: true,
  },
  {
    name: "Consultoría",
    price: "Audit",
    period: "/hora",
    desc: "Asesoría técnica para equipos y empresas.",
    features: ["Revisión de arquitectura", "Mejores prácticas de React", "Mentoria de equipo", "Estrategia de adopción tecnológica"],
    cta: "Agendar sesión",
    highlighted: false,
  },
];

export const CONTACT_REASONS = [
  "Discutir oportunidades de colaboración",
  "Consultoría sobre desarrollo React",
  "Feedback sobre este portafolio"
];
