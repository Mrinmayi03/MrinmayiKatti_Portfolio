// src/components/Intro.tsx
import portrait from '../assets/portrait.jpg';

export default function Intro() {
  const highlights = [
    'Built distributed data migration workflows processing 200K+ records per migration with 99%+ data integrity.',
    'Integrated 7+ ATS/CRM systems and reduced reconciliation errors by 30% through schema & type normalization.',
    'Shipped Kubernetes + Docker batch workloads with structured logging, retries, and validation layers.',
  ];

  const skills = [
    'Data Engineering',
    'ETL/ELT',
    'SQL (SQL Server/Postgres)',
    'Python',
    'Ruby on Rails',
    'REST APIs',
    'AWS (S3, RDS, EC2)',
    'Docker',
    'Kubernetes',
    'Data Modeling',
    'Observability',
    'React + TypeScript',
  ];

  return (
    <section id="intro" className="pt-16 pb-12">
      <div className="rounded-3xl border border-slate-900/10 bg-white/70 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.35)] backdrop-blur px-6 py-10 md:px-10">
        <div className="grid items-center gap-10 md:grid-cols-[220px_1fr]">
          {/* Photo */}
          <div className="flex justify-center md:justify-start">
            <img
              src={portrait}
              alt="Mrinmayi Katti portrait"
              className="h-52 w-52 rounded-2xl object-cover shadow-lg ring-1 ring-slate-900/10"
            />
          </div>

          {/* Main intro */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-slate-600">
              Data Engineer • AI/ML + Full-Stack Builder
            </p>

            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Hi, I’m Mrinmayi Katti <span aria-hidden>👋</span>
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-700">
              I build reliable data systems and product-grade applications—focused on clean pipelines,
              scalable backend services, and measurable impact. Recently, I worked as a{' '}
              <span className="font-semibold text-slate-900">Junior Data Engineer at Loxo</span>{' '}
              delivering large-scale ATS/CRM migrations and production batch workloads.
            </p>

            {/* Highlights */}
            <ul className="mt-6 space-y-2 text-slate-700">
              {highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-slate-900/60" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Skills chips */}
            <div className="mt-7 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800 transition"
              >
                View Projects →
              </a>

              <a
                href="#resume"
                className="inline-flex items-center justify-center rounded-xl border border-slate-900/15 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white transition"
              >
                Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-900/15 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white transition"
              >
                Contact
              </a>

              <a
                href="https://linkedin.com/in/mrinmayi-p-katti-0a6333248"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-900/15 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white transition"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}