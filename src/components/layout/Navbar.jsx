import { NAV_LINKS } from "../../utils/constants";

export default function Navbar({ onNavigateHome }) {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark py-3 glass-panel-heavy transition-all">
      <div className="container">
        {/* Logo: Simple y tipográfico */}
        <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#" onClick={(e) => { e.preventDefault(); onNavigateHome(); }}>
          <span className="tracking-tight fw-bold text-white fs-4">Alfredo Andrés</span>
        </a>

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

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav mx-auto gap-1 gap-lg-4 mb-3 mb-lg-0">
            {NAV_LINKS.map((link) => (
              <li className="nav-item" key={link.label}>
                <a className="nav-link small text-secondary fw-semibold px-2" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="d-flex ms-lg-4 gap-3 align-items-center">
            <a
              className="text-secondary hover-white transition-colors fs-5 me-2"
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a className="btn btn-outline-light rounded-pill px-4 btn-sm py-2" href="#contact">Contactar</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
