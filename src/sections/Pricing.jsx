import { PRICING_PLANS } from '../utils/constants';
import Section from '../components/ui/Section';

// Importamos las imágenes visuales para cada servicio
import imgMVP from '../assets/service-mvp.png';
import imgDev from '../assets/service-dev.png';
import imgAudit from '../assets/service-audit.png';

// Mapeo simple para asignar imágenes a los planes
const PLAN_IMAGES = [imgMVP, imgDev, imgAudit];

export default function Pricing() {
  return (
    <Section id="pricing" className="bg-darker">
      <div className="container py-5">
        {/* Encabezado de la sección*/}
        <div className="text-center mb-5 fade-in-up">
          <h2 className="fw-bold display-5 mb-3">¿Cómo puedo ayudarte?</h2>
          <p className="text-secondary lead mx-auto" style={{ maxWidth: '600px' }}>
            Ya sea que estés lanzando una idea desde cero o escalando un producto maduro,
            tengo un modelo de colaboración que se ajusta a tu ritmo.
          </p>
        </div>

        <div className="row g-4 align-items-stretch justify-content-center">
          {PRICING_PLANS.map((p, i) => (
            <div
              key={p.name}
              className={`col-12 col-md-6 col-lg-4 fade-in-up ${p.highlighted ? 'transform-gpu' : ''}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div
                className={[
                  "h-100 rounded-5 p-0 border position-relative transition-all hover-card overflow-hidden d-flex flex-column",
                  p.highlighted
                    ? "border-primary bg-dark shadow-2xl shadow-primary-subtle"
                    : "border-secondary border-opacity-25 bg-surface",
                ].join(" ")}
              >
                {/* Badge para el plan más popular */}
                {p.highlighted && (
                  <div className="position-absolute top-0 end-0 m-3 z-3">
                    <span className="badge bg-primary text-dark fw-bold rounded-pill px-3 py-2 shadow-sm border border-white border-opacity-25">
                      Opción Recomendada
                    </span>
                  </div>
                )}

                {/* --- ÁREA VISUAL INTERACTIVA --- */}
                {/* Contenedor de la imagen con efecto de zoom suave al hacer hover en la tarjeta */}
                <div className="position-relative w-100 overflow-hidden" style={{ height: '220px' }}>
                  {/* Overlay gradiente para integrar la imagen con el fondo de la tarjeta */}
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-t from-dark to-transparent z-1"></div>

                  <img
                    src={PLAN_IMAGES[i]}
                    alt={`Ilustración de ${p.name}`}
                    className="w-100 h-100 object-fit-cover transition-transform duration-700 hover-scale-110"
                    style={{ filter: 'brightness(0.9) contrast(1.1)' }}
                  />
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-4 p-lg-5 flex-grow-1 d-flex flex-column position-relative z-2 mt-n4">

                  <div className="mb-4">
                    <h3 className="h4 fw-bold text-white mb-2">{p.name}</h3>
                    <p className="text-secondary small text-balance opacity-75">{p.desc}</p>
                  </div>

                  <div className="d-flex align-items-baseline mb-4">
                    <span className="display-6 fw-bold text-white">{p.price}</span>
                    <span className="text-secondary ms-2 small">{p.period}</span>
                  </div>

                  <hr className="border-secondary opacity-25 my-0 mb-4" />

                  <ul className="list-unstyled text-secondary mb-5 vstack gap-3 flex-grow-1">
                    {p.features.map((f) => (
                      <li key={f} className="d-flex gap-3 align-items-start">
                        <div className="rounded-circle bg-primary bg-opacity-10 p-1 d-flex justify-content-center align-items-center flex-shrink-0 mt-1" style={{ width: 18, height: 18 }}>
                          <i className="bi bi-check2 text-primary" style={{ fontSize: '0.75rem' }}></i>
                        </div>
                        <span className="small text-light opacity-90">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={[
                      "btn w-100 py-3 fw-bold tracking-wide rounded-pill",
                      p.highlighted
                        ? "btn-primary shadow-lg hover-lift"
                        : "btn-outline-light border-opacity-25 hover-bg-surface-light",
                    ].join(" ")}
                  >
                    {p.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-secondary mt-5 mb-0 small opacity-50 fade-in-up delay-300">
          * Disponibilidad inmediata para nuevos retos.
        </p>
      </div>
    </Section>
  );
}
