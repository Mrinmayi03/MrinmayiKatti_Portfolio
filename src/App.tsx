import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const App: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100">
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