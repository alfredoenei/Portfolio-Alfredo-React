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
        <div className="rounded-4">
          <div className="d-flex align-items-center justify-content-between mb-5 pb-3 border-bottom border-secondary border-opacity-50">
            <h3 className="text-secondary small tracking-wider mb-0 fw-bold text-uppercase font-mono">
              Proyectos Destacados
            </h3>
          </div>

          <div className="row g-4">
            {PROJECTS.map((project, index) => (
              <div key={index} className="col-md-6 col-xl-4">
                <motion.div
                  className="elite-card h-100 p-4 cursor-pointer position-relative d-flex flex-column"
                  whileHover={{ y: -5 }}
                >
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h4 className="fw-bold text-white mb-0" style={{ fontSize: '1.25rem' }}>
                      {t(`projects.list.${project.key}.title`) !== `projects.list.${project.key}.title`
                        ? t(`projects.list.${project.key}.title`)
                        : project.title}
                    </h4>
                    <div className="d-flex gap-3">
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-secondary hover-white" title="GitHub">
                        <i className="bi bi-github fs-5"></i>
                      </a>
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="text-secondary hover-white" title="Live Demo">
                          <i className="bi bi-rocket-takeoff fs-5"></i>
                        </a>
                      )}
                      <button onClick={() => onViewProject(project)} className="btn btn-link text-secondary hover-white p-0 m-0 border-0" title={t('projects.viewProject')}>
                        <i className="bi bi-box-arrow-up-right fs-5"></i>
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-secondary small mb-4 lh-lg flex-grow-1">
                    {t(`projects.list.${project.key}.description`) !== `projects.list.${project.key}.description`
                      ? t(`projects.list.${project.key}.description`)
                      : project.description}
                  </p>
                  
                  <div className="d-flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="badge rounded-pill border border-secondary border-opacity-50 text-secondary fw-normal px-3 py-2 font-mono" style={{ fontSize: '0.7rem' }}>
                        {tag.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
            </FadeIn>
        </Section>
    );
}

