import Navbar        from './components/Navbar';
import Intro          from './components/Intro';
import Education      from './components/Education';
import Experience     from './components/Experience';
import Projects       from './components/Projects';
import Skills         from './components/Skills';
import Certifications from './components/Certifications';
import Contact        from './components/Contact';

const App: React.FC = () => (
  <div className="font-sans">
    <Navbar />
    <Intro />
    <Education />
    <Experience />
    <Projects />
    <Skills />
    <Certifications />
    <Contact />
  </div>
);

export default App;


