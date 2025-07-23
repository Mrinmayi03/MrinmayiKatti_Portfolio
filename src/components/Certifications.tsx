export default function Certifications() {
  const certs = [
    'CompTIA Data+',
    'Dean’s List (NJIT)',
    'Merit‑Based Scholarship',
  ];
  return (
    <section id="certifications" className="py-16 px-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Certifications & Awards</h2>
      <ul className="list-disc ml-5 space-y-1 text-gray-700 text-sm">
        {certs.map(c => <li key={c}>{c}</li>)}
      </ul>
    </section>
  );
}
