import { Suspense, lazy } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Lazy load sections for performance
const Hero = lazy(() => import("./sections/Hero"));
const Features = lazy(() => import("./sections/Features"));
const Pricing = lazy(() => import("./sections/Pricing"));
const FAQ = lazy(() => import("./sections/FAQ"));
const Contact = lazy(() => import("./sections/Contact"));

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<div className="min-vh-100 d-flex align-items-center justify-content-center text-white">Cargando...</div>}>
          <Hero />
          <Features />
          <Pricing />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
