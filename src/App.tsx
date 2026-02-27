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
      {/* Warm professional gradient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Soft beige gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FBF6EE] via-[#F4ECE2] to-[#EDE3D4]" />

        {/* Very subtle depth gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(15,23,42,0.05),transparent_60%)]" />

        {/* Soft bottom shadow fade */}
        <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_50%_120%,rgba(0,0,0,0.08),transparent_65%)]" />
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