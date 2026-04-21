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
      <main className="pb-5">
        <Suspense fallback={<div className="min-vh-100 d-flex align-items-center justify-content-center text-secondary font-mono">Loading dev environment...</div>}>
          {view === 'home' ? (
            <>
              {/* Section 1: Hero */}
              <div className="container py-5">
                <ProfileCard />
              </div>

              {/* Section 2: Projects */}
              <div className="bg-surface-light border-top border-bottom border-secondary border-opacity-10">
                <div className="container py-5">
                  <Projects onViewProject={handleViewProject} />
                </div>
              </div>

              {/* Section 3: Experience & Stack */}
              <div className="container py-5">
                <div className="row g-5">
                  <div className="col-lg-7">
                    <Experience />
                  </div>
                  <div className="col-lg-5">
                    <TechStack />
                  </div>
                </div>
              </div>

              {/* Section 4: Footer / Contact */}
              <div className="bg-surface-light border-top border-secondary border-opacity-10 mt-5">
                <div className="container py-5">
                  <div className="row g-4 align-items-stretch">
                    <div className="col-lg-6">
                      <Certifications />
                    </div>
                    <div className="col-lg-6">
                      <Contact />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="container pt-5 mt-5">
              <ProjectDetails project={selectedProject} onBack={handleBack} />
            </div>
          )}
        </Suspense>
      </main>
    </LanguageProvider>
  );
}
