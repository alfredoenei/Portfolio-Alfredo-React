import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Section from "../components/ui/Section";
import FadeIn from "../components/animations/FadeIn";

export default function ProfileCard() {
  const { t } = useLanguage();

  return (
    <Section id="profile" className="p-0 mb-4">
      <FadeIn>
        <div className="glass-panel rounded-4 p-4 p-md-5 h-100">
          <div className="mb-4">
            <span className="font-mono text-cyan small d-block mb-3">
              // FULLSTACK WEB DEVELOPER
            </span>
            <h1 className="display-4 fw-bold tracking-tight mb-4" style={{ letterSpacing: '-0.04em' }}>
              <span className="text-cyan">Alfredo</span> <span className="text-white">Enei</span>
            </h1>
            
            <p className="text-secondary mb-5 fs-6 lh-base" style={{ maxWidth: '500px' }}>
              {t('hero.description') || "Desarrollador especializado en crear soluciones escalables, desde el diseño de interfaces dinámicas hasta arquitecturas backend robustas."}
            </p>
          </div>

          {/* Terminal Block */}
          <div className="bg-dark rounded-3 p-4 mb-4 border border-secondary border-opacity-50 position-relative overflow-hidden">
            {/* Window controls */}
            <div className="d-flex gap-2 mb-3">
              <div className="rounded-circle" style={{ width: '10px', height: '10px', backgroundColor: '#ef4444' }}></div>
              <div className="rounded-circle" style={{ width: '10px', height: '10px', backgroundColor: '#eab308' }}></div>
              <div className="rounded-circle" style={{ width: '10px', height: '10px', backgroundColor: '#22c55e' }}></div>
            </div>
            
            <div className="font-mono small">
              <div className="d-flex">
                <span className="text-cyan">const</span>
                <span className="text-white ms-2">whoAmI</span>
                <span className="text-cyan ms-2">=</span>
                <span className="text-white ms-2">{'{'}</span>
              </div>
              <div className="ps-4 mt-1">
                <div className="mb-1">
                  <span className="text-secondary">frontend:</span>
                  <span className="text-code-green ms-2">"React · Angular · TypeScript"</span>,
                </div>
                <div className="mb-1">
                  <span className="text-secondary">backend:</span>
                  <span className="text-code-green ms-2">"Node.js · Express · SQL"</span>,
                </div>
                <div>
                  <span className="text-secondary">location:</span>
                  <span className="text-code-green ms-2">"Madrid, España"</span>,
                </div>
              </div>
              <div className="text-white mt-1">{'}'}</div>
            </div>
          </div>

          {/* Availability Badge */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="d-inline-flex align-items-center gap-2 border border-secondary border-opacity-50 rounded-1 px-3 py-2 bg-transparent mt-2"
          >
            <div className="bg-dot-active rounded-circle" style={{ width: '8px', height: '8px' }}></div>
            <span className="text-secondary small font-mono">{t('hero.available')}</span>
          </motion.div>
        </div>
      </FadeIn>
    </Section>
  );
}
