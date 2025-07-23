export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between">
        <span className="font-bold">Mrinmayi Katti</span>
        <div className="space-x-3 text-sm">
          {['intro','education','experience','projects','skills','certifications','contact']
            .map(id => (
              <a key={id} href={`#${id}`} className="hover:text-blue-600 capitalize">
                {id}
              </a>
            ))}
        </div>
      </div>
    </nav>
  );
}
