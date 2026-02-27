// src/App.tsx
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Resume from './components/Resume';

export default function App() {
  return (
    <div className="min-h-screen text-slate-900 bg-[#F6F1E8]">
      {/* Warm neutral background layers (beige/stone) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Soft warm gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF6EE] via-[#F6F1E8] to-[#EFE7DB]" />

        {/* Subtle warm vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_115%,rgba(15,23,42,0.10),transparent_65%)]" />

        {/* Very subtle paper grid */}
        <div
          className="absolute inset-0 opacity-[0.06]
          [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)]
          [background-size:72px_72px]"
        />
      </div>

      <Navbar />

      <main className="mx-auto max-w-6xl px-6">
        <Intro />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
        <Resume />
      </main>
    </div>
  );
}