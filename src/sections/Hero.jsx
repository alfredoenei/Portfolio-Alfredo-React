import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_STEPS } from '../utils/constants';
import FadeIn from '../components/animations/FadeIn';

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

  // Mapeo de gradientes
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
      <motion.div
        key={currentStep.id}
        className="position-absolute top-0 start-0 w-100 h-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        style={{
          background: getGradient(currentStep.id),
        }}
      />

      <div className="container position-relative z-1 pt-5">
        <div className="text-center mx-auto" style={{ maxWidth: '900px' }}>

          {/* Badge Dinámico */}
          <div className="mb-4">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="badge bg-dark border border-secondary text-white rounded-pill px-4 py-2 fs-6 shadow-lg fw-normal tracking-wide d-inline-block"
              >
                <span className="opacity-50 me-2">Fase {currentStep.id}:</span>
                {currentStep.text}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Título Principal */}
          <FadeIn delay={0.1}>
            <h1 className="display-3 fw-bold text-white mb-4 lh-sm tracking-tight">
              Hola, soy Alfredo. <br />
              <span className="text-gradient">Desarrollador Full Stack.</span>
            </h1>
          </FadeIn>

          {/* Subtítulo Estático pero impactante */}
          <FadeIn delay={0.2}>
            <p className="lead text-secondary mb-5 mx-auto fs-5" style={{ maxWidth: '750px' }}>
              Creo <span className="text-white fw-medium">experiencias digitales fluidas</span>.
              Especializado en transformar ideas complejas en productos web modernos y escalables.
            </p>
          </FadeIn>

          {/* Botones */}
          <FadeIn delay={0.3}>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary btn-lg px-5 py-3 fs-6"
                href="#projects"
              >
                Ver Proyectos
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline-light btn-lg px-5 py-3 fs-6"
                href="#contact"
              >
                Contactar
              </motion.a>
            </div>
          </FadeIn>

          {/* Indicadores de Progreso */}
          <FadeIn delay={0.4}>
            <div className="d-flex justify-content-center gap-2 mt-5">
              {HERO_STEPS.map((step, index) => (
                <motion.button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`btn p-0 border-0 rounded-pill ${index === activeStep ? 'bg-primary' : 'bg-secondary bg-opacity-25'}`}
                  initial={false}
                  animate={{
                    width: index === activeStep ? '32px' : '8px',
                    backgroundColor: index === activeStep ? 'var(--bs-primary)' : 'rgba(255,255,255,0.2)'
                  }}
                  style={{ height: '4px' }}
                  aria-label={`Ir al paso ${index + 1}`}
                />
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

