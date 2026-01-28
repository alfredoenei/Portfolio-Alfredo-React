
import GlowBackground from '../components/ui/GlowBackground';

/**
 * Sección Hero Principal
 * Diseño: "Estilo Shopify Dark" - Centrado, tipografía masiva, alto contraste.
 * Refactorizado para limpieza y escalabilidad.
 */
export default function Hero() {
  return (
    <section className="pt-5 mt-5 position-relative overflow-hidden">
      {/* Fondo decorativo sutil detrás del texto principal */}
      <GlowBackground className="top-0 start-50 translate-middle-x" opacity="opacity-40" size={600} />

      <div className="container pt-5 pb-5 position-relative z-1">

        {/* -- Encabezado Centrado Principal -- */}
        <div className="text-center mx-auto mb-5 pb-4 fade-in-up" style={{ maxWidth: '900px' }}>

          {/* Título Principal - H1 Masivo */}
          <h1 className="display-3 fw-bold text-white mb-4 lh-sm tracking-tight">
            El mundo digital avanza rápido. <br />
            <span className="text-gradient">Tu negocio debe ir más rápido.</span>
          </h1>

          {/* Subtítulo descriptivo */}
          <p className="lead text-secondary mb-5 mx-auto fs-5" style={{ maxWidth: '700px' }}>
            Escala todo tu negocio con una arquitectura web moderna, optimizada para conversiones,
            rendimiento y agilidad extrema.
          </p>

          {/* Botones de Acción */}
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <a className="btn btn-primary btn-lg px-5 py-3 fs-6" href="#contact">
              Contáctanos
            </a>
            <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6" href="#features">
              Comenzar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
