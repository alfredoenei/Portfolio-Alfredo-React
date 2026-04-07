import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Section from "../components/ui/Section";
import FadeIn from "../components/animations/FadeIn";

export default function TechStack() {
  const { t } = useLanguage();
  const techs = [
    "JAVASCRIPT", "TYPESCRIPT", "HTML", "CSS",
    "REACT", "ANGULAR", "NODE.JS", "EXPRESS",
    "SQL", "GIT"
  ];

  return (
    <Section id="tech-stack" className="p-0 mb-4">
      <FadeIn>
        <div className="glass-panel rounded-4 p-4 p-md-5">
          <h3 className="text-secondary small tracking-wider mb-4 fw-bold text-uppercase font-mono">
            {t('techStack.title')}
          </h3>
          
          <div className="d-flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span 
                key={tech} 
                className="badge bg-transparent border border-secondary text-secondary rounded-1 px-3 py-2 font-mono hover-bg-surface-light transition-all"
                style={{ fontSize: '0.8rem' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
