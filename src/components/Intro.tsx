// src/components/Intro.tsx
import portrait from '../assets/portrait.jpg';

export default function Intro() {
  return (
    <section
      id="intro"
      className="pt-20 pb-20 flex flex-col items-center text-center px-4 bg-gray-800 text-gray-100"
    >
      {/* ── Photo ────────────────────────────────────────────── */}
      <img
        src={portrait}
        alt="Mrinmayi portrait"
        className="w-60 h-60 object-cover rounded-2xl shadow-xl"
      />

      {/* ── Name ─────────────────────────────────────────────── */}
      <h1 className="text-5xl font-extrabold mt-6">
        Hi, I'm Mrinmayi Katti
        <span role="img" aria-label="wave"> 👋</span>
      </h1>

      {/* ── Tagline ──────────────────────────────────────────── */}
      <p className="mt-4 max-w-2xl text-xl text-gray-300">
        Data Science graduate (NJIT, GPA 3.8) passionate about AI products, full‑stack apps,
        and data‑driven solutions.
      </p>

      {/* ── Coursework ──────────────────────────────────────── */}
      <p className="mt-4 text-lg text-gray-400">
        <b className="text-gray-300">Key Coursework:</b> Machine Learning • Deep Learning •
        Data Mining • Algorithms • Cloud Computing • Statistical Methods
      </p>
    </section>
  );
}
