// src/components/Navbar.tsx
const links = [
  { label: 'Intro', href: '#intro' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '#resume' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur bg-[#f6f1e8]/80 border-b border-slate-200">
        <nav className="mx-auto max-w-6xl px-6">
          <div className="h-14 flex items-center justify-between gap-6">
            <a
              href="#intro"
              className="font-semibold tracking-tight text-slate-900 hover:text-slate-950"
            >
              Mrinmayi Katti
            </a>

            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="px-3 py-2 text-sm rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-900/5 transition"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}