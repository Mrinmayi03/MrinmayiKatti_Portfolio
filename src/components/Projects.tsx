// src/components/Projects.tsx
import ProjectCard from './ProjectCard';

import fsImg1 from '../assets/projects/frenchspeechsync/FrenchSpeechSync-1.png';
import fsImg2 from '../assets/projects/frenchspeechsync/FrenchSpeechSync-2.png';
import originalVid from '../assets/projects/frenchspeechsync/youtube_video.mp4';
import translatedVid from '../assets/projects/frenchspeechsync/FrenchTranslated.mp4';

import ccImg1 from '../assets/projects/calmcompanion/CalmCompanion-1.png';
import ccImg2 from '../assets/projects/calmcompanion/CalmCompanion-2.png';

import ssImg1 from '../assets/projects/stocksight/StockSight-1.png';
import ssImg2 from '../assets/projects/stocksight/StockSight-2.png';

import sbImg1 from '../assets/projects/steadybloom/SteadyBloom1.png';
import sbImg2 from '../assets/projects/steadybloom/SteadyBloom2.png';
import sbImg3 from '../assets/projects/steadybloom/SteadyBloom3.png';
import sbImg4 from '../assets/projects/steadybloom/SteadyBloom4.png';

export default function Projects() {
  const projects = [
    {
      title: 'SteadyBloom',
      tagline:
        'Full-stack ADHD care app combining secure software architecture with real-time mood and medication analytics.',
      bullets: [
        'Django REST API with JWT auth powers secure task, mood, and medication tracking.',
        'Integrated analytics: mood trend scoring, sentiment analysis, and D3 word clouds.',
        'React + Tailwind frontend with PostgreSQL on AWS RDS; deployed end-to-end.',
      ],
      tech: [
        'React',
        'TypeScript',
        'Django REST',
        'PostgreSQL',
        'JWT Auth',
        'Recharts',
        'D3.js',
        'Pandas',
        'Tailwind',
        'AWS RDS',
        'Render',
        'Netlify',
      ],
      images: [sbImg1, sbImg2, sbImg3, sbImg4],
      LiveDemo: 'https://steadybloom.netlify.app/',
      accent: 'from-fuchsia-500/40 to-indigo-500/40',
    },
    {
      title: 'French Speech Sync',
      tagline: 'AI tool that converts any MP4 into a fully dubbed French video with synced subtitles.',
      bullets: [
        'Reduced manual dubbing effort by 90% on 50+ videos.',
        'Whisper → transcription & timestamps; gTTS → French speech.',
        'MoviePy/ffmpeg merges audio + subtitles into final MP4.',
        'Outputs stored on AWS S3 with presigned download links.',
      ],
      tech: ['React', 'FastAPI', 'Whisper', 'gTTS', 'MoviePy', 'AWS S3', 'Docker'],
      images: [fsImg1, fsImg2],
      videos: [
        { src: originalVid, label: 'Original video' },
        { src: translatedVid, label: 'French-dubbed output' },
      ],
      github: 'https://github.com/Mrinmayi03/FrenchSpeechSync',
      accent: 'from-indigo-500/40 to-cyan-500/40',
    },
    {
      title: 'Calm Companion',
      tagline: 'Voice-enabled mental-health chatbot that responds with empathetic speech.',
      bullets: [
        '98% STT accuracy via Whisper; ~300ms response latency.',
        'GPT-3.5-Turbo for conversation logic; ElevenLabs for TTS.',
        'React + Tailwind UI with FastAPI backend.',
      ],
      tech: ['React', 'FastAPI', 'Whisper', 'GPT-3.5', 'ElevenLabs', 'Tailwind'],
      images: [ccImg1, ccImg2],
      github: 'https://github.com/Mrinmayi03/CalmCompanion',
      accent: 'from-emerald-500/40 to-lime-500/40',
    },
    {
      title: 'StockSight',
      tagline: 'Streamlit dashboard that forecasts stock prices using an LSTM model.',
      bullets: [
        'Achieved 92% directional accuracy on S&P 500 validation set.',
        'Automated yfinance data ingestion & MinMax scaling.',
        'Interactive moving-average charts and error metrics.',
      ],
      tech: ['Python', 'TensorFlow', 'Streamlit', 'yfinance', 'scikit-learn'],
      images: [ssImg1, ssImg2],
      github: 'https://github.com/Mrinmayi03/StockSight',
      accent: 'from-amber-500/40 to-orange-500/40',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-10">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}