import { useEffect, useState } from 'react';
import { HERO_STEPS } from '../utils/constants';

/**
 * Sección Hero Principal - Rediseño Dinámico
 * El fondo y el contenido cambian según el "paso" actual del carrusel.
 */
export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % HERO_STEPS.length);
    }, 4000); // 4 segundos por paso
    return () => clearInterval(interval);
  }, []);

  const currentStep = HERO_STEPS[activeStep];

  // Mapeo de gradientes de Tailwind a CSS estándar para background-image
  const getGradient = (stepId) => {
    switch (stepId) {
      case 1: return 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.15) 0%, rgba(15, 23, 42, 0) 70%)'; // Azul
      case 2: return 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.15) 0%, rgba(15, 23, 42, 0) 70%)'; // Púrpura
      case 3: return 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, rgba(15, 23, 42, 0) 70%)'; // Verde
      default: return 'none';
    }
  };

  return (
    <section className="position-relative overflow-hidden d-flex align-items-center" style={{ minHeight: '85vh' }}>

      {/* Fondo Dinámico con Transición Suave */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 transition-all duration-700"
        style={{
          background: getGradient(currentStep.id),
          opacity: 0.8
        }}
      />

      <div className="container position-relative z-1 pt-5">
        <div className="text-center mx-auto" style={{ maxWidth: '900px' }}>

          {/* Badge Dinámico */}
          <div className="mb-4 fade-in-up">
            <span className="badge bg-dark border border-secondary text-white rounded-pill px-4 py-2 fs-6 shadow-lg fw-normal tracking-wide animate-fade-in key-{activeStep}">
              <span className="opacity-50 me-2">Fase {currentStep.id}:</span>
              {currentStep.text}
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="display-3 fw-bold text-white mb-4 lh-sm tracking-tight fade-in-up delay-100">
            Hola, soy Alfredo. <br />
            <span className="text-gradient">Desarrollador Full Stack.</span>
          </h1>

          {/* Subtítulo Estático pero impactante */}
          <p className="lead text-secondary mb-5 mx-auto fs-5 fade-in-up delay-200" style={{ maxWidth: '750px' }}>
            Creo <span className="text-white fw-medium">experiencias digitales fluidas</span>.
            Especializado en transformar ideas complejas en productos web modernos y escalables.
          </p>

          {/* Botones */}
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5 fade-in-up delay-300">
            <a className="btn btn-primary btn-lg px-5 py-3 fs-6" href="#projects">
              Ver Proyectos
            </a>
            <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6" href="#contact">
              Contactar
            </a>
          </div>

          {/* Indicadores de Progreso */}
          <div className="d-flex justify-content-center gap-2 mt-5 fade-in-up delay-300">
            {HERO_STEPS.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`btn p-0 border-0 rounded-pill transition-all ${index === activeStep ? 'bg-primary' : 'bg-secondary bg-opacity-25'}`}
                style={{ width: index === activeStep ? '32px' : '8px', height: '4px' }}
                aria-label={`Ir al paso ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
