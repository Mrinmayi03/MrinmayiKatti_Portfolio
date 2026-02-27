import SectionShell from "./SectionShell";

export default function Education() {
  return (
    <SectionShell id="education" title="Education">
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold text-slate-50">
          New Jersey Institute of Technology
        </h3>
        <p className="text-lg text-slate-300">
          B.S. in Data Science — May 2025 • GPA 3.8 / 4.0
        </p>
        <p className="text-base text-slate-400">Dean’s List • Merit Scholarship</p>
      </div>
    </SectionShell>
  );
}