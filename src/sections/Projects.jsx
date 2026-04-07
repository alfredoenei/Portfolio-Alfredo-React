import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS } from "../utils/constants";
import Section from "../components/ui/Section";
import FadeIn from "../components/animations/FadeIn";

export default function Projects({ onViewProject }) {
    const { t } = useLanguage();

    return (
        <Section id="projects" className="p-0 mt-4 mb-4">
            <FadeIn>
                <div className="glass-panel rounded-4 p-4 p-md-5">
                    <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom border-secondary border-opacity-50">
                        <h3 className="text-secondary small tracking-wider mb-0 fw-bold text-uppercase font-mono">
                            Proyectos Destacados
                        </h3>
                    </div>

                    <div className="vstack gap-3">
                        {PROJECTS.map((project, index) => (
                            <motion.div
                                key={index}
                                className="border border-secondary rounded-3 p-4 hover-bg-surface-light transition-all cursor-pointer position-relative"
                                whileHover={{ y: -2 }}
                            >
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                    <h4 className="fw-bold text-white mb-0" style={{ fontSize: '1.2rem' }}>
                                        {t(`projects.list.${project.key}.title`) !== `projects.list.${project.key}.title`
                                            ? t(`projects.list.${project.key}.title`)
                                            : project.title}
                                    </h4>
                                    <div className="d-flex gap-2">
                                        <a href={project.github} target="_blank" rel="noreferrer" className="text-secondary hover-white">
                                            <i className="bi bi-github fs-5"></i>
                                        </a>
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noreferrer" className="text-secondary hover-white" title="Live Demo">
                                                <i className="bi bi-rocket-takeoff fs-5"></i>
                                            </a>
                                        )}
                                        <button onClick={() => onViewProject(project)} className="btn btn-link text-secondary hover-white p-0 m-0 border-0">
                                            <i className="bi bi-box-arrow-up-right fs-5"></i>
                                        </button>
                                    </div>
                                </div>
                                <p className="text-secondary small mb-3">
                                    {t(`projects.list.${project.key}.description`) !== `projects.list.${project.key}.description`
                                        ? t(`projects.list.${project.key}.description`)
                                        : project.description}
                                </p>
                                <div className="d-flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="font-mono small text-secondary" style={{ fontSize: '0.75rem' }}>
                                            {tag.toUpperCase()}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}

