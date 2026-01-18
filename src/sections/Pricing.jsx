import { PRICING_PLANS } from '../utils/constants';
import Section from '../components/ui/Section';

export default function Pricing() {
  return (
    <Section id="pricing" className="bg-darker">
      <div className="container py-5">
        <div className="text-center mb-5 fade-in-up">
          <h2 className="fw-bold display-6">¿Cómo podemos colaborar?</h2>
          <p className="text-secondary lead">
            Adaptabilidad total a las necesidades de tu proyecto o equipo.
          </p>
        </div>

        <div className="row g-4 align-items-center justify-content-center">
          {PRICING_PLANS.map((p, i) => (
            <div
              key={p.name}
              className={`col-12 col-md-6 col-lg-4 fade-in-up ${p.highlighted ? 'scale-105' : ''}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div
                className={[
                  "h-100 rounded-4 p-4 border position-relative transition-all hover-card",
                  p.highlighted
                    ? "border-primary bg-dark shadow-lg shadow-primary-subtle"
                    : "border-secondary bg-dark bg-opacity-25",
                ].join(" ")}
                style={p.highlighted ? { zIndex: 10 } : {}}
              >
                {p.highlighted && (
                  <div className="position-absolute top-0 start-50 translate-middle">
                    <span className="badge bg-primary rounded-pill px-3 py-2 shadow-sm uppercase tracking-wider small">Más Solicitado</span>
                  </div>
                )}

                <div className="text-center mb-4">
                  <h3 className="h5 fw-bold text-secondary text-uppercase tracking-wider small mb-2">{p.name}</h3>
                  <div className="d-flex justify-content-center align-items-baseline">
                    <span className="display-6 fw-bold">{p.price}</span>
                    <span className="text-secondary ms-1 small">{p.period}</span>
                  </div>
                  <p className="text-secondary mt-2 small text-balance">{p.desc}</p>
                </div>

                <hr className="border-secondary opacity-25 my-4" />

                <ul className="list-unstyled text-secondary mb-4 vstack gap-2">
                  {p.features.map((f) => (
                    <li key={f} className="d-flex gap-3 align-items-center">
                      <div className="rounded-circle bg-primary bg-opacity-10 p-1 d-flex justify-content-center align-items-center flex-shrink-0" style={{ width: 20, height: 20 }}>
                        <i className="bi bi-check2 text-primary small"></i>
                      </div>
                      <span className={`small ${p.highlighted ? 'text-primary-light' : ''}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={[
                    "btn w-100 py-2",
                    p.highlighted ? "btn-primary hover-glow" : "btn-outline-light",
                  ].join(" ")}
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-secondary mt-5 mb-0 small opacity-75 fade-in-up delay-300">
          * Disponible para contratos remotos internacionales.
        </p>
      </div>
    </Section>
  );
}
