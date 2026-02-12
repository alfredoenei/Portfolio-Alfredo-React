import { Suspense, lazy, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Carga diferida (lazy loading) de las secciones para mejorar el rendimiento
const Hero = lazy(() => import("./sections/Hero"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));
const ProjectDetails = lazy(() => import("./sections/ProjectDetails"));

export default function App() {
  const [view, setView] = useState('home'); // 'home' (inicio) | 'project' (detalle de proyecto)
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setView('project');
  };

  const handleBack = () => {
    setView('home');
    setSelectedProject(null);
  };

  return (
    <>
      <Navbar onNavigateHome={handleBack} />
      <main>
        <Suspense fallback={<div className="min-vh-100 d-flex align-items-center justify-content-center text-white">Cargando...</div>}>
          {view === 'home' ? (
            <>
              <Hero />
              <Projects onViewProject={handleViewProject} />
              <Contact />
            </>
          ) : (
            <ProjectDetails project={selectedProject} onBack={handleBack} />
          )}
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
