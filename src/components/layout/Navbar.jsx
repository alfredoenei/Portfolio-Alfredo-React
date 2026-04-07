import { useLanguage } from "../../context/LanguageContext";

export default function Navbar({ onNavigateHome }) {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav 
      className="navbar navbar-expand-lg fixed-top py-3 transition-all"
      style={{ 
        backgroundColor: 'rgba(10, 10, 10, 0.85)', 
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-color)'
      }}
    >
      <div className="container">
        {/* Logo / Brand */}
        <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#" onClick={(e) => { e.preventDefault(); onNavigateHome(); }}>
          <span className="tracking-tight fw-bold text-white fs-5 font-mono opacity-75 hover-white transition-all">Alfredo<span className="text-cyan">Enei</span></span>
        </a>

        {/* Right Controls */}
        <div className="d-flex ms-auto gap-3 align-items-center">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="btn btn-sm text-secondary hover-white border-0 px-2 d-flex align-items-center font-mono opacity-75 transition-all"
            aria-label="Switch Language"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>

          {/* Download CV */}
          <a 
            className="btn btn-outline-light rounded-pill px-4 btn-sm py-2 d-flex align-items-center border-secondary border-opacity-50 text-secondary hover-white hover-bg-surface-light transition-all" 
            href="/assets/CV-ALFREDO-ACTUALIZADO-2026.pdf" 
            download="CV_Alfredo_Enei.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-mono small">{t('nav.downloadCv')}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
