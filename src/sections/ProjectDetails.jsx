import { useEffect } from "react";
import GlowBackground from "../components/ui/GlowBackground";

export default function ProjectDetails({ project, onBack }) {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) return null;

    return (
        <section className="min-vh-100 bg-darker text-white position-relative overflow-hidden pt-5 pb-5">
            <GlowBackground className="start-0 top-0" size={600} opacity="opacity-20" />

            <div className="container position-relative z-1 pt-4">
                {/* Header / Back Button */}
                <div className="mb-5 fade-in-up">
                    <button
                        onClick={onBack}
                        className="btn btn-outline-secondary rounded-pill px-4 d-flex align-items-center gap-2 hover-white transition-all"
                    >
                        <i className="bi bi-arrow-left"></i> Volver al Portafolio
                    </button>
                </div>

                <div className="row g-5">
                    {/* Left Column: Image/GIF */}
                    <div className="col-lg-7 fade-in-up delay-100">
                        <div className="glass-panel p-2 rounded-4 overflow-hidden border-secondary shadow-lg">
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-100 rounded-3 object-fit-cover"
                                    style={{ minHeight: "300px", maxHeight: "600px" }}
                                />
                            ) : (
                                <div className="aspect-ratio-16-9 bg-dark d-flex align-items-center justify-content-center rounded-3">
                                    <div className="text-center p-5">
                                        <i className="bi bi-image text-secondary fs-1 mb-3 d-block opacity-50"></i>
                                        <span className="text-secondary small text-uppercase tracking-wider fw-bold opacity-50">
                                            {project.imagePlaceholder}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="col-lg-5 fade-in-up delay-200">
                        <h1 className="display-5 fw-bold mb-3 text-gradient-primary-to-secondary">{project.title}</h1>

                        <div className="d-flex flex-wrap gap-2 mb-4">
                            {project.tags.map(tag => (
                                <span key={tag} className="badge bg-dark border border-secondary text-secondary rounded-pill fw-normal px-3 py-2">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mb-5">
                            <h3 className="h5 fw-bold text-white mb-3 d-flex align-items-center gap-2">
                                <i className="bi bi-info-circle text-primary"></i> Sobre el Proyecto
                            </h3>
                            <p className="text-gray-300 lead fs-6 lh-lg">
                                {project.longDescription || project.description}
                            </p>
                        </div>

                        <div className="d-grid gap-3 d-md-flex">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg rounded-pill px-5 d-flex align-items-center justify-content-center gap-2 shadow-primary"
                            >
                                <i className="bi bi-github"></i> Ver Código Fuente
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
