// src/App.tsx
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen text-slate-100 bg-[#0A0A0F]">
      {/* Professional neutral background layers */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Soft charcoal gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#111116] to-[#0D0D12]" />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_120%,rgba(0,0,0,0.6),transparent_60%)]" />

        {/* Very subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
          [background-size:60px_60px]"
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
      </main>
    </div>
  );
}