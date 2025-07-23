import portrait from '../assets/portrait.jpg';

export default function Intro() {
  return (
    <section id="intro" className="pt-24 pb-16 flex flex-col items-center text-center px-4">
      <img
        src={portrait}
        alt="Mrinmayi portrait"
        className="w-40 h-40 rounded-full object-cover shadow-lg"
      />
      <h1 className="text-3xl font-bold mt-4">Hi, I'm Mrinmayi Katti👋</h1>
      <p className="mt-2 max-w-2xl text-gray-600">
        Data Science senior (NJIT, GPA 3.8) passionate about AI products, full‑stack apps,
        and data‑driven solutions.
      </p>
      <p className="mt-3 text-sm text-gray-500">
        <b>Key Coursework:</b> Machine Learning • Deep Learning • Data Mining •
        Algorithms • Cloud Computing
      </p>
    </section>
  );
}
