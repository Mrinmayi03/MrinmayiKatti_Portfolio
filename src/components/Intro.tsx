import portrait from "../assets/portrait.jpg";
import SectionShell from "./SectionShell";

export default function Intro() {
  return (
    <SectionShell
      id="intro"
      title="Hi, I'm Mrinmayi Katti 👋"
      subtitle="Data Science graduate (NJIT, GPA 3.8) passionate about AI products, full-stack apps, and data-driven solutions."
      className="pt-10"
    >
      <div className="grid gap-8 md:grid-cols-[240px_1fr] md:items-center">
        <img
          src={portrait}
          alt="Mrinmayi portrait"
          className="w-60 h-60 object-cover rounded-2xl shadow-xl border border-white/10"
        />

        <div>
          <p className="text-slate-300 text-lg leading-relaxed">
            <span className="font-semibold text-slate-200">Key Coursework:</span>{" "}
            Machine Learning • Deep Learning • Data Mining • Algorithms • Cloud
            Computing • Statistical Methods
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-2 text-sm font-semibold transition"
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-2 text-sm font-semibold transition"
            >
              Contact →
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}