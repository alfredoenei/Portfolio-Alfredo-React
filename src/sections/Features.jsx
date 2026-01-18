import { FEATURES } from '../utils/constants';
import Section from '../components/ui/Section';
import GlowBackground from '../components/ui/GlowBackground';

export default function Features() {
  return (
    <Section id="features">
      {/* Background Decor */}
      <GlowBackground className="top-0 start-0" size={500} />

      <div className="container py-5">
        <div className="row align-items-end mb-5 g-3 fade-in-up">
          <div className="col-lg-7">
            <h2 className="fw-bold display-6 mb-2">Ingeniería que genera <span className="text-primary">confianza</span></h2>
            <p className="text-secondary lead mb-0">
              No solo es "hacer que funcione". Es construir software robusto, mantenible y orientado a resultados de negocio.
            </p>
          </div>
          <div className="col-lg-5 text-lg-end">
            {/* Secondary Action */}
          </div>
        </div>

        <div className="row g-4">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="col-12 col-md-6 col-lg-4 fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="h-100 p-4 rounded-4 border border-secondary bg-dark bg-opacity-50 hover-card group">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 bg-opacity-10 bg-white border border-secondary"
                    style={{ width: 48, height: 48 }}
                  >
                    <i className={`bi ${f.icon} ${f.color} fs-4`}></i>
                  </div>
                  <h3 className="h5 mb-0 fw-bold">{f.title}</h3>
                </div>

                <p className="text-secondary mb-0">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
