// src/components/Experience.tsx
export default function Experience() {
  const roles = [
    {
      company: 'Loxo',
      title: 'Junior Data Engineer',
      period: 'Sep 2025 – Present',
      bullets: [
        'Designed and operated distributed data migration workflows processing 200K+ records per migration with 99%+ data integrity.',
        'Integrated 7+ external ATS/CRM systems, resolving UUID/type mismatches and schema inconsistencies to reduce reconciliation errors by 30%.',
        'Engineered reusable job orchestration templates with retry logic, structured logging, and validation layers, reducing manual intervention by 25%.',
        'Implemented schema normalization and post-migration reconciliation checks to enforce strict data quality SLAs.',
        'Containerized backend batch workloads with Docker and deployed to Kubernetes for fault-tolerant, production-grade processing.',
        'Collaborated cross-functionally with product and engineering teams to debug edge cases, improve migration reliability, and optimize runtime performance.',
        'Maintained observability via structured logs, metrics tracking, and retry patterns to ensure high system resilience.',
      ],
      tech: ['Ruby on Rails', 'Python', 'SQL Server', 'Kubernetes', 'Docker', 'ETL/ELT', 'REST APIs'],
      accent: 'from-indigo-400/70 to-cyan-400/70',
    },
    {
      company: 'Reliance Jio',
      title: 'AI/ML Intern',
      period: 'Jun 2024 – Aug 2024',
      bullets: [
        'Built SQL and Python based data pipelines supporting A/B testing infrastructure, contributing to 18% retention growth.',
        'Built real-time interactive dashboards in Python, Tableau, and GCP BigQuery, reducing analysis time by 40%.',
        'Automated experiment metric tracking using SQL queries and batch processing scripts.',
      ],
      accent: 'from-emerald-400/70 to-lime-400/70',
    },
    {
      company: 'LinkQuest Global',
      title: 'Data Analyst Intern',
      period: 'May 2021 – Jul 2021',
      bullets: [
        'Improved SQL query efficiency by 35% and doubled ETL throughput using Spark.',
        'Automated anomaly detection with SAS, R, and MongoDB logging.',
        'Led agile development with Git, Jira, and Docker for reproducible pipelines.',
        'Deployed containerized data services on AWS EC2 using Docker for scalable analytics workloads.',
      ],
      accent: 'from-amber-400/70 to-orange-400/70',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight">
          Work Experience
        </h2>

        <div className="space-y-8">
          {roles.map((r) => (
            <article
              key={`${r.company}-${r.title}`}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 backdrop-blur"
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${r.accent ?? 'from-slate-400/40 to-slate-200/20'}`} />

              <div className="p-6 md:p-8">
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-2xl font-semibold text-slate-100">
                    {r.title} <span className="text-slate-400">— {r.company}</span>
                  </h3>
                  <p className="text-slate-400">{r.period}</p>
                </div>

                <ul className="mt-4 space-y-2 text-slate-300">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {r.tech && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {r.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-slate-900/50 px-3 py-1 text-xs text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}