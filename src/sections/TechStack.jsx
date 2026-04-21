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
    <Section id="tech-stack" className="p-0">
      <FadeIn>
        <div className="elite-card p-4 p-md-5 h-100">
          <h3 className="text-secondary small tracking-wider mb-5 fw-bold text-uppercase font-mono">
            {t('techStack.title')}
          </h3>
          
          <div className="d-flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span 
                key={tech} 
                className="badge rounded-pill border border-secondary border-opacity-50 text-secondary fw-normal px-3 py-2 font-mono"
                style={{ fontSize: '0.75rem' }}
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
