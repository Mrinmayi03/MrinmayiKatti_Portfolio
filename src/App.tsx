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

const App: React.FC = () => (
  <div className="min-h-screen text-slate-900">
    {/* NEW: richer warm gradient background */}
    <div className="pointer-events-none fixed inset-0 -z-20 bg-[#efe6d8]" />

    {/* Top-left cool depth */}
    <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(1000px_circle_at_10%_5%,rgba(59,130,246,0.18),transparent_55%)]" />

    {/* Top-right subtle violet depth */}
    <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(1000px_circle_at_90%_15%,rgba(139,92,246,0.15),transparent_55%)]" />

    {/* Bottom warm amber glow */}
    <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(1200px_circle_at_50%_95%,rgba(217,119,6,0.20),transparent_60%)]" />

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
      <div className="h-16" />
    </main>
  </div>
);

export default App;