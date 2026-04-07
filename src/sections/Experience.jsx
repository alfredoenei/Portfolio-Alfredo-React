import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Section from "../components/ui/Section";
import FadeIn from "../components/animations/FadeIn";

export default function Experience() {
  const { t } = useLanguage();

  const renderPoints = (pointsKey) => {
    const points = t(pointsKey);
    if (Array.isArray(points)) {
      return points.map((point, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: point }}></li>
      ));
    }
    return null;
  };

  return (
    <Section id="experience" className="p-0 mb-4">
      <FadeIn>
        <div className="glass-panel rounded-4 p-4 p-md-5 h-100">
          <h3 className="text-secondary small tracking-wider mb-4 fw-bold text-uppercase font-mono">
            {t('experience.title')}
          </h3>

          <div className="position-relative border-start border-secondary py-2 ms-2 ps-4">
            
            {/* Item 1 */}
            <div className="mb-5 position-relative">
              {/* Timeline dot */}
              <div 
                className="position-absolute bg-dark border border-secondary rounded-circle" 
                style={{ width: '12px', height: '12px', left: '-31px', top: '6px' }}
              ></div>
              
              <h4 className="fw-bold text-white mb-2" style={{ fontSize: '1.1rem' }}>
                {t('experience.freelance.title')}
              </h4>
              <div className="d-inline-block border border-secondary border-opacity-50 text-secondary small rounded-pill px-3 py-1 mb-3 font-mono">
                <i className="bi bi-calendar3 me-2"></i>
                {t('experience.freelance.date')}
              </div>
              
              <h5 className="text-primary mb-3 small fw-semibold">{t('experience.freelance.role')}</h5>
              
              <ul className="text-secondary small ps-3 mb-0 vstack gap-2">
                {renderPoints('experience.freelance.points')}
              </ul>
            </div>

            {/* Item 2 */}
            <div className="position-relative">
              <div 
                className="position-absolute bg-dark border border-secondary rounded-circle" 
                style={{ width: '12px', height: '12px', left: '-31px', top: '6px' }}
              ></div>
              
              <h4 className="fw-bold text-white mb-2" style={{ fontSize: '1.1rem' }}>
                {t('experience.personal.title')}
              </h4>
              <div className="d-inline-block border border-secondary border-opacity-50 text-secondary small rounded-pill px-3 py-1 mb-3 font-mono">
                <i className="bi bi-code-slash me-2"></i>
                {t('experience.personal.date')}
              </div>
              
              <h5 className="text-primary mb-3 small fw-semibold">{t('experience.personal.role')}</h5>
              
              <ul className="text-secondary small ps-3 mb-0 vstack gap-2">
                {renderPoints('experience.personal.points')}
              </ul>
            </div>

          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
