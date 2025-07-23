// src/components/Experience.tsx
export default function Experience() {
  const roles = [
    {
      company: 'Reliance Jio',
      title: 'AI/ML Intern',
      period: 'Jun 2024 – Aug 2024',
      bullets: [
        'Boosted user retention by 18 % via A/B testing & Python analytics.',
        'Built real‑time dashboards on BigQuery → 40 % faster insights.',
        'Containerized models with Docker and deployed on AWS EC2.',
      ],
    },
    {
      company: 'LinkQuest Global',
      title: 'Data Analyst Intern',
      period: 'May 2021 – Jul 2021',
      bullets: [
        'Improved SQL query efficiency by 35 % and doubled ETL throughput using Spark.',
        'Automated anomaly detection with SAS, R, and MongoDB logging.',
        'Led agile development with Git, Jira, and Docker for reproducible pipelines.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gray-900 text-gray-100 border-t-2 border-white-700"
    >
      {/* ── Heading ─────────────────────────────────────────── */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
        Internship Experience
      </h2>

      {/* ── Roles ───────────────────────────────────────────── */}
      <div className="space-y-12">
        {roles.map((r) => (
          <div key={r.company} className="space-y-3">
            <h3 className="text-2xl font-semibold text-gray-50">
              {r.title} — {r.company}
            </h3>
            <p className="text-lg text-gray-400">{r.period}</p>
            <ul className="list-disc ml-6 text-base text-gray-300 space-y-2">
              {r.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
