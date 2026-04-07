import { Suspense, lazy, useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/layout/Navbar";

// Lazy loading de las secciones
const ProfileCard = lazy(() => import("./sections/ProfileCard"));
const Projects = lazy(() => import("./sections/Projects"));
const Experience = lazy(() => import("./sections/Experience"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Certifications = lazy(() => import("./sections/Certifications"));
const Contact = lazy(() => import("./sections/Contact"));
const ProjectDetails = lazy(() => import("./sections/ProjectDetails"));

export default function App() {
  const [view, setView] = useState('home'); // 'home' | 'project'
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
    <LanguageProvider>
      <Navbar onNavigateHome={handleBack} />
      {/* Añadimos padding-top para compensar el Navbar fixed */}
      <main className="container pt-5 mt-5 pb-5">
        <Suspense fallback={<div className="min-vh-100 d-flex align-items-center justify-content-center text-secondary font-mono">Loading dev environment...</div>}>
          {view === 'home' ? (
            <div className="row g-4 pt-4">
              {/* Columna Izquierda (Principal) */}
              <div className="col-lg-7 d-flex flex-column gap-4">
                <ProfileCard />
                <Projects onViewProject={handleViewProject} />
              </div>
              
              {/* Columna Derecha (Secundaria) */}
              <div className="col-lg-5 d-flex flex-column gap-4">
                <Experience />
                <TechStack />
                <Certifications />
                <Contact />
              </div>
            </div>
          ) : (
            <ProjectDetails project={selectedProject} onBack={handleBack} />
          )}
        </Suspense>
      </main>
    </LanguageProvider>
  );
}
