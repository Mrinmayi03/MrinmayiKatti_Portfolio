// src/components/Contact.tsx
export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-900 text-gray-100 border-t-2 border-white-700"
    >
      {/* ── Heading ─────────────────────────────────────────── */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
        Get in Touch
      </h2>

      {/* ── Intro line ─────────────────────────────────────── */}
      <p className="text-lg text-gray-300 mb-6">
        I’m open to new‑grad SWE / Data Science opportunities.
      </p>

      {/* ── Contact details ───────────────────────────────── */}
      <div className="space-y-4 text-lg">
        <p>
          <span className="font-semibold text-gray-400">Email:</span>{' '}
          <a
            href="mailto:mpkatti03@gmail.com"
            className="font-semibold text-blue-400 hover:underline"
          >
            mpkatti03@gmail.com
          </a>
        </p>

        <p>
          <span className="font-semibold text-gray-400">LinkedIn:</span>{' '}
          <a
            href="https://linkedin.com/in/mrinmayi-p-katti-0a6333248"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-blue-400 hover:underline"
          >
            /in/mrinmayi‑p‑katti‑0a6333248
          </a>
        </p>

        <p>
          <span className="font-semibold text-gray-400">GitHub:</span>{' '}
          <a
            href="https://github.com/Mrinmayi03"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-blue-400 hover:underline"
          >
            github.com/Mrinmayi03
          </a>
        </p>
        <p>
          <span className="font-semibold text-gray-400">Phone Number:</span>{' '}
          <a
            className="font-semibold text-blue-400 hover:underline"
          >
            +1 862-405-0732
          </a>
        </p>
      </div>
    </section>
  );
}
