export default function Experience() {
  const roles = [
    {
      company: 'Reliance Jio',
      title: 'AI/ML Intern',
      period: 'Jun 2024 – Aug 2024',
      bullets: [
        'Boosted user retention by 18 % via A/B testing & Python analytics.',
        'Built real‑time dashboards on BigQuery → 40 % faster insights.',
        'Containerised models with Docker & deployed on AWS EC2.',
      ],
    },
    {
      company: 'LinkQuest Global',
      title: 'Data Analyst Intern',
      period: 'May 2021 – Jul 2021',
      bullets: [
        'Improved SQL query efficiency by 35 %.',
        'Parallelised ETL with Spark & Hadoop; doubled throughput.',
        'Automated anomaly detection with SAS, R & MongoDB.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 px-6">
      <h2 className="text-2xl font-bold mb-6">Internship Experience</h2>
      <div className="space-y-8">
        {roles.map(r => (
          <div key={r.company}>
            <h3 className="font-semibold">{r.title} — {r.company}</h3>
            <p className="text-sm text-gray-500">{r.period}</p>
            <ul className="list-disc ml-5 mt-2 text-sm text-gray-600 space-y-1">
              {r.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
