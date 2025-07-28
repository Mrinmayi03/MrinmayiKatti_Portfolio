// src/components/Skills.tsx
export default function Skills() {
  const skillGroups = [
    {
      title: 'Languages & Programming',
      skills: ['Python', 'JavaScript/TypeScript', 'SQL', 'R', 'SAS'],
    },
    {
      title: 'Web & Software Development',
      skills: ['React', 'FastAPI', 'Node.js', 'RESTful APIs', 'Tailwind CSS'],
    },
    {
      title: 'Data Science & ML',
      skills: [
        'TensorFlow',
        'scikit-learn',
        'pandas',
        'NumPy',
        'Streamlit',
        'Seaborn',
        'Jupyter Notebooks',
        'Feature Engineering',
      ],
    },
    {
      title: 'Cloud, DevOps & Deployment',
      skills: ['Docker', 'AWS (S3, RDS)', 'Render', 'Netlify', 'Git', 'CI/CD'],
    },
    {
      title: 'APIs & Tools',
      skills: ['Whisper', 'ElevenLabs', 'OpenAI API', 'PostgreSQL', 'MongoDB'],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gray-900 text-gray-100 border-t-2 border-white-700"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
        Tech Skills
      </h2>

      <div className="grid gap-10 md:grid-cols-1 max-w-5xl">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xl font-semibold mb-3 text-white/90">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-lg bg-gray-800 text-gray-200 text-sm md:text-base font-medium shadow-sm whitespace-nowrap"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
