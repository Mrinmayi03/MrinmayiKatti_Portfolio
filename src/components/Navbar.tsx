// src/components/Navbar.tsx
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
  return (
    <nav className="fixed top-0 w-full bg-blue-100 border-b border-blue-300 z-50">
      {/* wrapper keeps bar short */}
      <div className="px-3 py-2">
        {/* flex container that scrolls horizontally on very small screens */}
        <div className="flex gap-6 whitespace-nowrap overflow-x-auto scrollbar-hide">
          {links.map((id) => (
            <a
              key={id}
              href={`#${id.toLowerCase()}`}
              className="text-base md:text-lg font-semibold text-blue-900 hover:text-blue-600 tracking-wide"
            >
              {id}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}