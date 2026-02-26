<div className="min-h-screen bg-[#0B0F19] text-slate-100">
  {/* subtle neutral glow (NOT blue) */}
  <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(255,255,255,0.06),transparent_60%)]" />

  {/* optional: second glow for depth */}
  <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(700px_circle_at_80%_30%,rgba(148,163,184,0.08),transparent_55%)]" />

  <Navbar />
  <main className="mx-auto max-w-6xl px-6">
    <Intro />
    <Education />
    <Experience />
    <Projects />
    <Skills />
    <Certifications />
    <Contact />
  </main>
</div>