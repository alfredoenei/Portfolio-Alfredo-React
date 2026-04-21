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
    <Section id="certifications" className="p-0">
      <FadeIn>
        <div className="elite-card p-4 p-md-5 h-100">
          <h3 className="text-secondary small tracking-wider mb-5 fw-bold text-uppercase font-mono">
            {t('certifications.title')}
          </h3>
          
          <div className="vstack gap-4 font-mono small">
            {certs.map((cert) => (
              <div key={cert.title} className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center rounded-3 p-3 border border-secondary border-opacity-10 transition-all hover-bg-surface-light">
                <div className="mb-3 mb-sm-0 pe-sm-3 position-relative ps-3">
                  <div className="position-absolute bg-cyan rounded-circle" style={{ width: '6px', height: '6px', left: '0', top: '8px' }}></div>
                  <span className="text-white fw-semibold d-block mb-1">{cert.title}</span>
                  <span className="text-secondary opacity-75" style={{ fontSize: '0.8rem'}}>{cert.issuer}</span>
                </div>
                <a 
                  href={`/assets/${cert.file}`}
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-outline-cyan btn-sm rounded-pill px-3 py-1 font-mono small"
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
