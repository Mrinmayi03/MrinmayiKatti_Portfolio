import ProjectCard from './ProjectCard';
import frenchImg from '../assets/projects/frenchspeechsync/FrenchSpeechSync-1.png';
import rachelImg from '../assets/projects/calmcompanion/CalmCompanion-1.png';
import stockImg  from '../assets/projects/stocksight/StockSight-1.png';
import testVideo from '../assets/projects/frenchspeechsync/youtube_video.mp4';

export default function Projects() {
  const projects = [
    {
      title: 'French Speech Sync',
      description: 'MP4‑to‑French dubbing (Whisper + gTTS + MoviePy).',
      tech: ['React','FastAPI','AWS S3','Docker'],
      img: frenchImg,
      github: 'https://github.com/Mrinmayi03/FrenchSpeechSync',
      extraLink: { href: testVideo, label: 'Download test video' },
    },
    {
      title: 'Rachel Chatbot',
      description: 'Voice mental‑health assistant (Whisper, GPT‑3.5, ElevenLabs).',
      tech: ['React','FastAPI','GPT‑3.5','ElevenLabs'],
      img: rachelImg,
      github: 'https://github.com/Mrinmayi03/CalmCompanion',
    },
    {
      title: 'Stock Market Predictor',
      description: 'LSTM forecasting + Streamlit dashboard.',
      tech: ['Python','TensorFlow','Streamlit','yfinance'],
      img: stockImg,
      github: 'https://github.com/Mrinmayi03/StockSight',
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  );
}
