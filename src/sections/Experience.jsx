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
    <Section id="experience" className="p-0">
      <FadeIn>
        <div className="elite-card p-4 p-md-5 h-100">
          <h3 className="text-secondary small tracking-wider mb-5 fw-bold text-uppercase font-mono">
            {t('experience.title')}
          </h3>

          <div className="position-relative border-start border-secondary border-opacity-30 py-2 ms-2 ps-4">
            
            {/* Item 1 */}
            <div className="mb-5 position-relative">
              <div 
                className="position-absolute bg-dark border border-secondary rounded-circle" 
                style={{ width: '12px', height: '12px', left: '-31px', top: '6px' }}
              ></div>
              
              <h4 className="fw-bold text-white mb-2" style={{ fontSize: '1.2rem' }}>
                {t('experience.freelance.title')}
              </h4>
              <div className="d-inline-block border border-secondary border-opacity-30 text-secondary small rounded-pill px-3 py-1 mb-4 font-mono">
                <i className="bi bi-calendar3 me-2"></i>
                {t('experience.freelance.date')}
              </div>
              
              <h5 className="text-cyan mb-3 small fw-semibold text-uppercase tracking-wider">{t('experience.freelance.role')}</h5>
              
              <ul className="text-secondary small ps-3 mb-0 vstack gap-3 lh-lg">
                {renderPoints('experience.freelance.points')}
              </ul>
            </div>

            {/* Item 2 */}
            <div className="position-relative">
              <div 
                className="position-absolute bg-dark border border-secondary rounded-circle" 
                style={{ width: '12px', height: '12px', left: '-31px', top: '6px' }}
              ></div>
              
              <h4 className="fw-bold text-white mb-2" style={{ fontSize: '1.2rem' }}>
                {t('experience.personal.title')}
              </h4>
              <div className="d-inline-block border border-secondary border-opacity-30 text-secondary small rounded-pill px-3 py-1 mb-4 font-mono">
                <i className="bi bi-code-slash me-2"></i>
                {t('experience.personal.date')}
              </div>
              
              <h5 className="text-cyan mb-3 small fw-semibold text-uppercase tracking-wider">{t('experience.personal.role')}</h5>
              
              <ul className="text-secondary small ps-3 mb-0 vstack gap-3 lh-lg">
                {renderPoints('experience.personal.points')}
              </ul>
            </div>

          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
