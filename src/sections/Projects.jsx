import { motion } from 'framer-motion';
import { PROJECTS } from "../utils/constants";
import Section from "../components/ui/Section";
import GlowBackground from "../components/ui/GlowBackground";
import StaggerContainer from "../components/animations/StaggerContainer";
import FadeIn from "../components/animations/FadeIn";

export default function Projects({ onViewProject }) {
    // Variantes para los items del grid, coincidentes con StaggerContainer
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <Section id="projects" className="position-relative">
            <GlowBackground className="start-0 top-50 translate-middle-y" size={500} opacity="opacity-25" />

            <div className="container py-5 position-relative z-1">
                <FadeIn>
                    <h2 className="display-5 fw-bold text-center mb-2 text-white">Mis Proyectos</h2>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <p className="text-secondary text-center lead mb-5">
                        Una selección de trabajos recientes.
                    </p>
                </FadeIn>

                <StaggerContainer className="row g-5 justify-content-center">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            className="col-lg-6 d-flex align-items-stretch"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="glass-panel p-0 overflow-hidden rounded-4 w-100 d-flex flex-column shadow-lg border-secondary"
                                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {/* Imagen / Video / GIF */}
                                <div className="aspect-ratio-16-9 bg-darker border-bottom border-white border-opacity-10 position-relative overflow-hidden">
                                    {project.image ? (
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-100 h-100 object-fit-cover"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    ) : (
                                        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                                            <div className="text-center p-4">
                                                <i className="bi bi-image text-secondary fs-1 mb-2 d-block opacity-50"></i>
                                                <span className="text-secondary small text-uppercase tracking-wider fw-bold opacity-50">
                                                    {project.imagePlaceholder}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="p-4 d-flex flex-column flex-grow-1">
                                    <div className="mb-3">
                                        <h3 className="h4 fw-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-secondary mb-4 small lh-lg">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="mt-auto">
                                        <div className="d-flex flex-wrap gap-2 mb-4">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="badge bg-dark border border-secondary text-secondary rounded-pill fw-normal px-3 py-2">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="d-flex gap-3 pt-3 border-top border-secondary border-opacity-25">
                                            <motion.a
                                                href={project.github}
                                                className="btn btn-outline-light btn-sm rounded-pill px-4 d-flex align-items-center gap-2"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <i className="bi bi-github"></i> Código
                                            </motion.a>
                                            <motion.button
                                                onClick={() => onViewProject(project)}
                                                className="btn btn-primary btn-sm rounded-pill px-4 d-flex align-items-center gap-2"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Ver más <i className="bi bi-eye"></i>
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </Section>
    );
}

