import { useLanguage } from "../../context/LanguageContext";
import { NAV_LINKS, SOCIAL_LINKS } from "../../utils/constants";

export default function Navbar({ onNavigateHome }) {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark py-3 glass-panel-heavy transition-all">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#" onClick={(e) => { e.preventDefault(); onNavigateHome(); }}>
          <img src="/assets/logo.png" alt="Alfredo Enei" height="40" className="d-inline-block align-text-top rounded" />
          <span className="tracking-tight fw-bold text-white fs-4 d-none d-sm-inline">Alfredo Enei</span>
        </a>

        <div className="d-flex align-items-center gap-2">
          <button
            className="navbar-toggler border-0 focus-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav mx-auto gap-1 gap-lg-4 mb-3 mb-lg-0">
            {NAV_LINKS.map((link) => (
              <li className="nav-item" key={link.key}>
                <a className="nav-link small text-secondary fw-semibold px-2" href={link.href}>
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>

          <div className="d-flex ms-lg-4 gap-3 align-items-center mt-3 mt-lg-0">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="btn btn-sm btn-outline-secondary text-white border-opacity-25 rounded-pill px-3 d-flex align-items-center gap-2 transition-transform hover-scale"
              aria-label="Switch Language"
            >
              <i className="bi bi-translate"></i>
              <span className="small fw-semibold">{language === 'es' ? 'EN' : 'ES'}</span>
            </button>

            <a
              className="text-secondary hover-white transition-colors fs-5 me-2 d-flex align-items-center"
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <div className="d-flex gap-2">
              <a 
                className="btn btn-outline-light rounded-pill px-4 btn-sm py-2 d-flex align-items-center gap-2" 
                href="/assets/CV-ALFREDO-ACTUALIZADO-2026.pdf" 
                download="CV_Alfredo_Enei.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-download"></i>
                {t('nav.downloadCv')}
              </a>
              <a className="btn btn-outline-light rounded-pill px-4 btn-sm py-2 d-flex align-items-center" href="#contact">
                {t('nav.contactBtn')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
