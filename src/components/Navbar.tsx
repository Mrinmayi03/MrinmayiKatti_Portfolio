// src/components/Navbar.tsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';   
const links = [
  'INTRO',
  'EDUCATION',
  'EXPERIENCE',
  'PROJECTS',
  'SKILLS',
  'CERTIFICATIONS',
  'CONTACT',
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-blue-100 border-b border-blue-300 z-50">
      {/* ── Main bar ───────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Name / brand */}
        <span className="text-xl md:text-2xl font-extrabold text-gray-900">
          Mrinmayi Katti
        </span>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-6">
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

        {/* Hamburger (mobile only) */}
        <button
          className="sm:hidden text-blue-900"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ── Slide-down mobile menu ─────────────────────────── */}
      {open && (
        <div className="sm:hidden bg-blue-100 border-t border-blue-300 px-6 pb-4">
          <div className="flex flex-col gap-4">
            {links.map((id) => (
              <a
                key={id}
                href={`#${id.toLowerCase()}`}
                className="text-lg font-semibold text-blue-900 hover:text-blue-600 tracking-wide"
                onClick={() => setOpen(false)}
              >
                {id}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
