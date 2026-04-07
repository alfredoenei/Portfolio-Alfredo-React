*Read this in other languages: [Español](README-es.md)*

# Portfolio — Fullstack Web Developer

**Live Demo:** [alfredo-enei-portfolio.netlify.app](https://alfredo-enei-portfolio.netlify.app/)

A professional, interactive portfolio designed as a modern Single Page Application (SPA). This project serves both as a presentation of my work and as a demonstration of my frontend skills, focusing on performance, clean architecture, and user experience.

---

## Technical Stack

- **Framework:** React 19
- **Build Tool:** Vite 7
- **Styling:** Custom CSS with Bootstrap 5 utility classes
- **Animations:** Framer Motion
- **State Management:** React Context API (for i18n)

## Key Features

- **Component-Based Architecture:** Modular design prioritizing reusability and clean code, with strict separation between UI components and logical sections.
- **Performance Optimized:** Implementation of React lazy loading (`React.lazy` y `Suspense`) to ensure fast initial page loads.
- **Internationalization (i18n):** Built-in support for multiple languages (Spanish/English) with automatic persistence via `localStorage`.
- **Responsive & Modern Design:** A terminal-inspired aesthetic featuring glassmorphism and subtle micro-animations that enhance UX without compromising performance.
- **Continuous Deployment:** Automated CI/CD pipeline set up with Netlify.

## Project Structure

```text
src/
├── components/     # Reusable UI elements and generic wrappers
├── context/        # Global state providers (LanguageContext)
├── sections/       # Main views (Projects, Experience, TechStack, etc.)
├── styles/         # Global CSS and custom design variables
└── utils/          # Constants, localization data, and helpers
```

## Running Locally

To run this project locally, execute the following commands:

```bash
# Clone the repository
git clone https://github.com/alfredoenei/React-saas-landing.git
cd React-saas-landing

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

## Contact

- **LinkedIn:** [linkedin.com/in/alfredo-enei-61b61034b](https://www.linkedin.com/in/alfredo-enei-61b61034b)
- **GitHub:** [github.com/alfredoenei](https://github.com/alfredoenei)
