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
    tech: ['Ruby on Rails', 'SQL Server', 'Kubernetes', 'Docker', 'ETL/ELT', 'REST APIs'],
    },
    {
      company: 'Reliance Jio',
      title: 'AI/ML Intern',
      period: 'Jun 2024 – Aug 2024',
      bullets: [
        'Built SQL and Python based data pipelines supporting A/B testing infrastructure, contributing to 18% retention growth.',
        'Built real-time interactive dashboards in Python, Tableau, and GCP BigQuery, reducing analysis time by 40%.',
        'Automated experiment metric tracking using SQL queries and batch processing scripts.',
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
        ' Deployed containerized data services on AWS EC2 using Docker for scalable analytics workloads.',
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
        Work  Experience
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
