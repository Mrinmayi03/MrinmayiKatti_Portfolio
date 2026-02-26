import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const App: React.FC = () => (
  <div className="min-h-screen bg-slate-950 text-slate-100 relative">
    {/* subtle spotlight */}
    <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(99,102,241,0.12),transparent_60%)]" />

    <Navbar />

    {/* Main content container */}
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

export default App;