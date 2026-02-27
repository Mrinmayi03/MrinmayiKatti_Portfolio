// src/components/Experience.tsx
type Role = {
  company: string;
  title: string;
  period: string;
  bullets: string[];
  tech?: string[];
};

export default function Experience() {
  const roles: Role[] = [
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
        'Collaborated cross-functionally to debug edge cases, improve reliability, and optimize runtime performance.',
        'Maintained observability via structured logs, metrics tracking, and retry patterns to ensure high system resilience.',
      ],
      tech: ['Ruby on Rails', 'Python', 'SQL Server', 'Kubernetes', 'Docker', 'ETL/ELT', 'REST APIs'],
    },
    {
      company: 'Reliance Jio',
      title: 'AI/ML Intern',
      period: 'Jun 2024 – Aug 2024',
      bullets: [
        'Built SQL and Python based data pipelines supporting A/B testing infrastructure, contributing to 18% retention growth.',
        'Built real-time dashboards in Python, Tableau, and GCP BigQuery, reducing analysis time by 40%.',
        'Automated experiment metric tracking using SQL queries and batch processing scripts.',
      ],
    },
    {
      company: 'LinkQuest Global',
      title: 'Data Analyst Intern',
      period: 'May 2021 – Jul 2021',
      bullets: [
        'Improved SQL query efficiency by 35% and doubled ETL throughput using Spark.',
        'Automated anomaly detection with SAS, R, and MongoDB logging.',
        'Led agile delivery with Git, Jira, and Docker for reproducible pipelines.',
        'Deployed containerized data services on AWS EC2 using Docker for scalable analytics workloads.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-10">
        Work Experience
      </h2>

      <div className="space-y-8">
        {roles.map((r) => (
          <div
            key={`${r.title}-${r.company}`}
            className="rounded-3xl bg-white/70 backdrop-blur border border-slate-200 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.35)] p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
              <h3 className="text-2xl font-semibold text-slate-900">
                {r.title} <span className="text-slate-600">— {r.company}</span>
              </h3>
              <p className="text-slate-600">{r.period}</p>
            </div>

            <ul className="mt-5 list-disc ml-6 text-slate-700 space-y-2">
              {r.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            {r.tech && (
              <div className="mt-6 flex flex-wrap gap-2">
                {r.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full border border-slate-300 bg-white/60 text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}