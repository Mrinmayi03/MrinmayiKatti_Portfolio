import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

const App: React.FC = () => (
  <div className="min-h-screen text-slate-100 bg-[#070A12]">
    {/* premium “tech ink” background */}
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* soft top glow */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(56,189,248,0.10),transparent_60%)]" />
      {/* subtle purple glow */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_85%_20%,rgba(168,85,247,0.08),transparent_55%)]" />
      {/* gentle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(1400px_circle_at_50%_120%,rgba(0,0,0,0.65),transparent_55%)]" />
      {/* faint noise-ish layer (simple) */}
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />
    </div>

    <Navbar />

    {/* IMPORTANT: only one main */}
    <main className="mx-auto max-w-6xl px-6">
      <Intro />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </main>

    {/* footer spacing */}
    <div className="h-16" />
  </div>
);

export default App;