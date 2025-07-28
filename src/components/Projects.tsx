// src/components/Projects.tsx
import ProjectCard from './ProjectCard';

/* ── FrenchSpeechSync assets ──────────────────────────────── */
import fsImg1 from '../assets/projects/frenchspeechsync/FrenchSpeechSync-1.png';
import fsImg2 from '../assets/projects/frenchspeechsync/FrenchSpeechSync-2.png';
import originalVid from '../assets/projects/frenchspeechsync/youtube_video.mp4';
import translatedVid from '../assets/projects/frenchspeechsync/FrenchTranslated.mp4';

/* ── Calm Companion assets ───────────────────────────────── */
import ccImg1 from '../assets/projects/calmcompanion/CalmCompanion-1.png';
import ccImg2 from '../assets/projects/calmcompanion/CalmCompanion-2.png';

/* ── StockSight assets ───────────────────────────────────── */
import ssImg1 from '../assets/projects/stocksight/StockSight-1.png';
import ssImg2 from '../assets/projects/stocksight/StockSight-2.png';

/* ── SteadyBloom assets ───────────────────────────────────── */
import sbImg1 from '../assets/projects/steadybloom/SteadyBloom1.png';
import sbImg2 from '../assets/projects/steadybloom/SteadyBloom2.png';
import sbImg3 from '../assets/projects/steadybloom/SteadyBloom3.png';
import sbImg4 from '../assets/projects/steadybloom/SteadyBloom4.png';

export default function Projects() {
  const projects = [
    /* 1️⃣  French Speech Sync */
    {
      title: 'French Speech Sync',
      tagline:
        'AI tool that converts any MP4 into a fully dubbed French video with synced subtitles.',
      bullets: [
        'Reduced manual dubbing effort by 90 % on 50+ videos.',
        'Whisper → transcription & timestamps; gTTS → French speech.',
        'MoviePy/ffmpeg merge audio + subtitles into final MP4.',
        'Outputs stored on AWS S3 with presigned download links.',
      ],
      tech: [
        'React',
        'FastAPI',
        'Whisper',
        'gTTS',
        'MoviePy',
        'AWS S3',
        'Docker',
      ],
      images: [fsImg1, fsImg2],
      videos: [
        { src: originalVid, label: 'Original video' },
        { src: translatedVid, label: 'French‑dubbed output' },
      ],
      github: 'https://github.com/Mrinmayi03/FrenchSpeechSync',
    },

    /* 2️⃣  Calm Companion */
    {
      title: 'Calm Companion',
      tagline:
        'Voice‑enabled mental‑health chatbot that responds with empathetic speech.',
      bullets: [
        '98 % STT accuracy via Whisper; ~300 ms response latency.',
        'GPT‑3.5‑Turbo for conversation logic; ElevenLabs for TTS.',
        'Built with React 18 + Tailwind and FastAPI backend.',
      ],
      tech: [
        'React',
        'FastAPI',
        'Whisper',
        'GPT‑3.5',
        'ElevenLabs',
        'Tailwind',
      ],
      images: [ccImg1, ccImg2],
      github: 'https://github.com/Mrinmayi03/CalmCompanion',
    },

    /* 3️⃣  StockSight */
    {
      title: 'StockSight',
      tagline:
        'Streamlit dashboard that forecasts stock prices using an LSTM model.',
      bullets: [
        'Achieved 92 % directional accuracy on S&P 500 validation set.',
        'Automated yfinance data ingestion & MinMax scaling.',
        'Interactive moving‑average charts and error metrics.',
      ],
      tech: ['Python', 'TensorFlow', 'Streamlit', 'yfinance', 'scikit‑learn'],
      images: [ssImg1, ssImg2],
      github: 'https://github.com/Mrinmayi03/StockSight',
    },
    {
      title: 'SteadyBloom',
      tagline:
        'Full-stack ADHD care app combining secure software architecture with real-time mood and medication analytics.',
      bullets: [
        'Django REST API with JWT auth powers secure task, mood, and medication tracking.',
        'Integrated data science: mood trend scoring, sentiment analysis, and D3 word clouds.',
        'Built with React 18 + Tailwind frontend, PostgreSQL on AWS RDS, and fully deployed.',
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
        'Tailwind CSS',
        'AWS RDS',
        'Render',
        'Netlify',
      ],
      images: [sbImg1, sbImg2 , sbImg3 , sbImg4],
      github: 'https://github.com/Mrinmayi03/ADHDCare' ,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-gray-100 border-t-2 border-white-700">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 tracking-tight">
        Projects
      </h2>

      {/* stack cards vertically */}
      <div className="space-y-12">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
