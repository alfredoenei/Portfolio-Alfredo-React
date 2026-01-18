import { NAV_LINKS } from "../../utils/constants";

export default function Navbar() {
  return (
<<<<<<< HEAD
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark py-3 glass-panel-heavy transition-all">
=======
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark py-3 transition-all">
>>>>>>> 161da99ec3f81cd7a9b78a59e208ee58c7eceed8
      <div className="container">
        <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#">
          <div className="d-flex align-items-center justify-content-center text-primary" style={{ width: 32, height: 32 }}>
            <i className="bi bi-hexagon-fill fs-3"></i>
          </div>
          <span className="tracking-tight fw-bold text-white">Alfredo Enei</span>
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
          <ul className="navbar-nav ms-auto gap-1 gap-lg-4 mb-3 mb-lg-0">
<<<<<<< HEAD
            {NAV_LINKS.map((link) => (
              <li className="nav-item" key={link.label}>
                <a className="nav-link small text-uppercase tracking-wider" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
=======
            <li className="nav-item">
              <a className="nav-link small text-uppercase tracking-wider" href="#features">Características</a>
            </li>
            <li className="nav-item">
              <a className="nav-link small text-uppercase tracking-wider" href="#pricing">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link small text-uppercase tracking-wider" href="#faq">FAQ</a>
            </li>
>>>>>>> 161da99ec3f81cd7a9b78a59e208ee58c7eceed8
          </ul>

          <div className="d-flex ms-lg-4 gap-3">
            <a className="btn btn-primary d-none d-lg-block rounded-pill px-4" href="#contact">Contactar</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
