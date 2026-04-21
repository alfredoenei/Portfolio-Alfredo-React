import { SOCIAL_LINKS } from "../utils/constants";
import Section from "../components/ui/Section";
import FadeIn from "../components/animations/FadeIn";

export default function Contact() {
  const email = "alfredoenei432@gmail.com";

  return (
    <Section id="contact" className="p-0">
      <FadeIn>
        <div className="elite-card p-4 p-md-5 h-100">
          <h3 className="text-secondary small tracking-wider mb-5 fw-bold text-uppercase font-mono">
            Conecta Conmigo
          </h3>

          <div className="vstack gap-4 font-mono small">
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noreferrer"
              className="text-secondary hover-white text-decoration-none d-flex justify-content-between align-items-center transition-all p-3 border border-secondary border-opacity-10 rounded-3 hover-bg-surface-light"
            >
              <span>GITHUB</span>
              <span className="text-cyan">↗</span>
            </a>
            
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="text-secondary hover-white text-decoration-none d-flex justify-content-between align-items-center transition-all p-3 border border-secondary border-opacity-10 rounded-3 hover-bg-surface-light"
            >
              <span>LINKEDIN</span>
              <span className="text-cyan">↗</span>
            </a>

            <a 
              href={`mailto:${email}`}
              className="text-secondary hover-white text-decoration-none d-flex justify-content-between align-items-center transition-all p-3 border border-secondary border-opacity-10 rounded-3 hover-bg-surface-light"
            >
              <span>EMAIL</span>
              <span className="text-cyan">↗</span>
            </a>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
