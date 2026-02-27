import SectionShell from "./SectionShell";

export default function Contact() {
  return (
    <SectionShell
      id="contact"
      title="Get in Touch"
      subtitle="I’m open to new-grad SWE / Data Science opportunities."
    >
      <div className="space-y-4 text-slate-300">
        <p>
          <span className="font-semibold text-slate-400">Email:</span>{" "}
          <a
            href="mailto:mpkatti03@gmail.com"
            className="font-semibold text-sky-300 hover:text-sky-200 hover:underline"
          >
            mpkatti03@gmail.com
          </a>
        </p>

        <p>
          <span className="font-semibold text-slate-400">LinkedIn:</span>{" "}
          <a
            href="https://linkedin.com/in/mrinmayi-p-katti-0a6333248"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-sky-300 hover:text-sky-200 hover:underline"
          >
            /in/mrinmayi-p-katti-0a6333248
          </a>
        </p>

        <p>
          <span className="font-semibold text-slate-400">GitHub:</span>{" "}
          <a
            href="https://github.com/Mrinmayi03"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-sky-300 hover:text-sky-200 hover:underline"
          >
            github.com/Mrinmayi03
          </a>
        </p>

        <p>
          <span className="font-semibold text-slate-400">Phone:</span>{" "}
          <span className="font-semibold text-slate-200">+1 862-405-0732</span>
        </p>
      </div>
    </SectionShell>
  );
}