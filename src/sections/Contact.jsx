import { SOCIAL_LINKS } from "../utils/constants";
import Section from "../components/ui/Section";
import FadeIn from "../components/animations/FadeIn";

export default function Contact() {
  const email = "alfredoenei432@gmail.com";

  return (
    <Section id="contact" className="p-0">
      <FadeIn>
        <div className="glass-panel rounded-4 p-4 p-md-5 h-100">
          <h3 className="text-secondary small tracking-wider mb-4 fw-bold text-uppercase font-mono">
            Conecta Conmigo
          </h3>

          <div className="vstack gap-3 font-mono small">
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noreferrer"
              className="text-secondary hover-white text-decoration-none d-flex justify-content-between align-items-center transition-all px-2 py-1 hover-bg-surface-light rounded-1"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>
            
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="text-secondary hover-white text-decoration-none d-flex justify-content-between align-items-center transition-all px-2 py-1 hover-bg-surface-light rounded-1"
            >
              <span>LinkedIn</span>
              <span>↗</span>
            </a>

            <a 
              href={`mailto:${email}`}
              className="text-secondary hover-white text-decoration-none d-flex justify-content-between align-items-center transition-all px-2 py-1 hover-bg-surface-light rounded-1"
            >
              <span>Email</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
