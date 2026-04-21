import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectDetails({ project, onBack }) {
    const { t } = useLanguage();
    // Desplazar hacia arriba al montar el componente
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) return null;

    return (
        <motion.div
            className="fixed-top w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-75 z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backdropFilter: 'blur(5px)' }}
        >
            <motion.div
                className="container position-relative z-1"
                style={{ maxWidth: '1000px', maxHeight: '90vh' }}
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
                <div className="elite-card p-0 overflow-hidden shadow-2xl d-flex flex-column" style={{ maxHeight: '85vh' }}>

                    {/* Header con botón de cerrar */}
                    <div className="p-3 border-bottom border-secondary border-opacity-25 d-flex justify-content-between align-items-center bg-black bg-opacity-40">
                        <h2 className="h5 m-0 text-white fw-bold">
                            {t(`projects.list.${project.key}.title`) !== `projects.list.${project.key}.title`
                                ? t(`projects.list.${project.key}.title`)
                                : project.title}
                        </h2>
                        <button
                            onClick={onBack}
                            className="btn btn-sm btn-dark rounded-circle d-flex align-items-center justify-content-center border border-secondary border-opacity-50"
                            style={{ width: '32px', height: '32px' }}
                        >
                            <i className="bi bi-x-lg text-white"></i>
                        </button>
                    </div>

                    <div className="overflow-auto custom-scrollbar">
                        <div className="row g-0">
                            {/* Columna Izquierda: Imagen */}
                            <div className="col-lg-7 d-flex align-items-center justify-content-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                                {project.image ? (
                                    <motion.img
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        src={project.image}
                                        alt={t(`projects.list.${project.key}.title`) !== `projects.list.${project.key}.title` ? t(`projects.list.${project.key}.title`) : project.title}
                                        className="img-fluid rounded shadow-sm border border-secondary border-opacity-20"
                                        style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                                    />
                                ) : (
                                    <div className="text-center p-5 opacity-50">
                                        <i className="bi bi-image text-secondary fs-1 mb-3 d-block"></i>
                                        <span className="text-secondary small text-uppercase tracking-wider fw-bold">
                                            {project.imagePlaceholder}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Columna Derecha: Detalles */}
                            <div className="col-lg-5 p-4 p-md-5">
                                <div className="mb-4">
                                    <div className="d-flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="badge rounded-pill border border-secondary border-opacity-50 text-secondary fw-normal px-3 py-2 font-mono" style={{ fontSize: '0.7rem' }}>
                                                {tag.toUpperCase()}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-secondary lh-lg fs-6">
                                        {t(`projects.list.${project.key}.longDescription`) !== `projects.list.${project.key}.longDescription`
                                            ? t(`projects.list.${project.key}.longDescription`)
                                            : (project.longDescription || project.description)}
                                    </p>
                                </div>

                                <div className="d-grid gap-3">
                                    {project.live && (
                                        <a
                                          href={project.live}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="btn btn-cyan rounded-pill d-flex align-items-center justify-content-center gap-2 py-2 fw-semibold"
                                        >
                                          <i className="bi bi-rocket-takeoff"></i> LIVE DEMO
                                        </a>
                                    )}
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`btn ${project.live ? 'btn-outline-light' : 'btn-cyan'} rounded-pill d-flex align-items-center justify-content-center gap-2 py-2 fw-semibold`}
                                    >
                                        <i className="bi bi-github"></i> {t('projects.viewCode').toUpperCase()}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
