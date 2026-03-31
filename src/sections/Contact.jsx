import { useState } from "react";
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_REASONS } from "../utils/constants";
import Section from "../components/ui/Section";
import GlowBackground from "../components/ui/GlowBackground";
import FadeIn from "../components/animations/FadeIn";

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const email = "alfredoenei432@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Section id="contact">
      {/* Glow effect */}
      <GlowBackground className="end-0 bottom-0" />

      <div className="container py-5">
        <div className="row g-5 align-items-stretch">
          <div className="col-lg-5">
            <FadeIn direction="right">
              <h2 className="fw-bold display-6 mb-3">{t('contact.title')}</h2>
              <p className="text-secondary lead mb-4">
                {t('contact.subtitle')}
              </p>

              <div className="mt-4 p-4 rounded-4 border border-secondary bg-dark bg-opacity-50">
                <div className="fw-semibold mb-3 text-white">{t('contact.reasonsLabel')}</div>
                <ul className="text-secondary mb-0 ps-3 vstack gap-2">
                  {CONTACT_REASONS.map((reasonKey) => (
                    <li key={reasonKey}>{t(reasonKey)}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          <div className="col-lg-7 d-flex align-items-center">
            <FadeIn delay={0.2} direction="left" className="w-100">
              <div className="p-4 p-md-5 rounded-4 glass-panel shadow-lg text-center d-flex flex-column justify-content-center align-items-center h-100">
                <div className="mb-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary rounded-circle mb-3" style={{ width: '64px', height: '64px' }}>
                    <i className="bi bi-envelope-paper-heart fs-1"></i>
                  </div>
                  <h3 className="fw-semibold text-white mb-1">{t('contact.emailLabel')}</h3>
                </div>

                <div className="bg-dark bg-opacity-50 border border-secondary rounded-pill px-4 py-3 mb-3 d-flex align-items-center gap-3 w-100 justify-content-between" style={{ maxWidth: '400px' }}>
                  <span className="fs-5 fw-bold text-white tracking-wide font-monospace text-truncate">
                    {email}
                  </span>
                  
                  <button 
                    onClick={handleCopy}
                    className={`btn btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center transition-all ${copied ? 'btn-success text-white' : 'btn-outline-secondary hover-white'}`}
                    style={{ minWidth: '40px', width: '40px', height: '40px' }}
                    title={t('contact.copyEmail')}
                  >
                    <i className={`bi ${copied ? 'bi-check2-all fs-5' : 'bi-clipboard fs-5'}`}></i>
                  </button>
                </div>

                {/* Toasty notification area */}
                <div className="mb-4 d-flex align-items-center justify-content-center" style={{ minHeight: '30px' }}>
                  <span className={`badge bg-success bg-opacity-25 text-success px-3 py-2 rounded-pill transition-all ${copied ? 'opacity-100' : 'opacity-0'}`}>
                    <i className="bi bi-check-circle-fill me-2"></i>
                    {t('contact.copied')}
                  </span>
                </div>

                <a 
                  href={`mailto:${email}`}
                  className="btn btn-primary btn-lg rounded-pill px-5 fw-bold hover-scale"
                >
                  <i className="bi bi-send-fill me-2"></i>
                  {t('contact.sendEmail')}
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </Section>
  );
}
