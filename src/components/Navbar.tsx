// src/components/Navbar.tsx
export default function Navbar() {
  const links = [
    'INTRO',
    'EDUCATION',
    'EXPERIENCE',
    'PROJECTS',
    'SKILLS',
    'CERTIFICATIONS',
    'CONTACT',
  ];

  return (
    <nav className="fixed top-0 w-full bg-blue-100 border-b border-blue-300 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* ── Name / brand ────────────────────────────────── */}
        <span className="text-2xl font-extrabold text-gray-900">
          Mrinmayi Katti
        </span>

        {/* ── Navigation links ───────────────────────────── */}
        <div className="flex flex-wrap gap-6">
          {links.map((id) => (
            <a
              key={id}
              href={`#${id.toLowerCase()}`}
              className="text-lg font-semibold text-blue-900 hover:text-blue-600 tracking-wide"
            >
              {id}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
