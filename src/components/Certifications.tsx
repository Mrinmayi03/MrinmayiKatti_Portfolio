import SectionShell from "./SectionShell";

export default function Certifications() {
  const certs = ["CompTIA Data+", "Dean’s List (NJIT)", "Merit-Based Scholarship"];

  return (
    <SectionShell id="certifications" title="Certifications & Awards">
      <ul className="list-disc ml-6 space-y-3 text-slate-300">
        {certs.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </SectionShell>
  );
}