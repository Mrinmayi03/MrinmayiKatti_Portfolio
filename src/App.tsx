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
    {/* Beige gradient background */}
    <div className="pointer-events-none fixed inset-0 -z-10 bg-[#f6f1e8]" />
    <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(900px_circle_at_15%_10%,rgba(30,64,175,0.10),transparent_55%)]" />
    <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(900px_circle_at_85%_20%,rgba(124,58,237,0.08),transparent_55%)]" />
    <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1100px_circle_at_50%_95%,rgba(217,119,6,0.10),transparent_60%)]" />

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

export default App;