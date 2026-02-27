// src/components/Navbar.tsx
const links = [
  { label: 'Intro', href: '#intro' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
  { label: "Resume", href: "#resume" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur bg-gray-950/70 border-b border-white/10">
        <nav className="mx-auto max-w-6xl px-6">
          <div className="h-14 flex items-center justify-between gap-6">
            {/* Left: Name / Brand */}
            <a
              href="#intro"
              className="font-semibold tracking-tight text-gray-100 hover:text-white"
            >
              Mrinmayi Katti
            </a>

            {/* Right: Links */}
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="px-3 py-2 text-sm rounded-lg text-gray-200 hover:text-white hover:bg-white/10 transition"
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