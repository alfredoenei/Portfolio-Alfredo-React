import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Section from "../components/ui/Section";
import FadeIn from "../components/animations/FadeIn";

export default function Certifications() {
  const { t } = useLanguage();

  const certs = [
    {
      title: "PMI Project Management Ready",
      issuer: "PMI",
      file: "PMI Project Management Ready-CERT.pdf"
    },
    {
      title: "IT Specialist in JavaScript",
      issuer: "Certiport",
      file: "JavaScript.pdf"
    }
  ];

  return (
    <Section id="certifications" className="p-0 mb-4">
      <FadeIn>
        <div className="glass-panel rounded-4 p-4 p-md-5">
          <h3 className="text-secondary small tracking-wider mb-4 fw-bold text-uppercase font-mono">
            {t('certifications.title')}
          </h3>
          
          <div className="vstack gap-2 font-mono small">
            {certs.map((cert) => (
              <div key={cert.title} className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center rounded-1 px-2 py-2 bg-transparent transition-all hover-bg-surface-light">
                <div className="mb-1 mb-sm-0 pe-sm-3 position-relative ps-3">
                  <div className="position-absolute bg-secondary rounded-circle opacity-50" style={{ width: '4px', height: '4px', left: '0', top: '8px' }}></div>
                  <span className="text-secondary fw-semibold d-block mb-1">{cert.title}</span>
                  <span className="text-secondary opacity-50" style={{ fontSize: '0.75rem'}}>{cert.issuer}</span>
                </div>
                <a 
                  href={`/assets/${cert.file}`}
                  target="_blank" 
                  rel="noreferrer"
                  className="text-cyan hover-white text-decoration-none text-nowrap d-flex align-items-center"
                >
                  {t('certifications.viewBtn')}
                </a>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
