import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

const App: React.FC = () => (
  <div className="min-h-screen text-slate-100">
    {/* classy background */}
    <div className="pointer-events-none fixed inset-0 -z-10 bg-[#0b1220]" />
    <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(148,163,184,0.10),transparent_55%),radial-gradient(700px_circle_at_80%_20%,rgba(99,102,241,0.10),transparent_55%),radial-gradient(900px_circle_at_50%_100%,rgba(16,185,129,0.06),transparent_60%)]" />

    <Navbar />
    <main>
      <Intro />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Resume />
      <Contact />
    </main>
  </div>
);

export default App;