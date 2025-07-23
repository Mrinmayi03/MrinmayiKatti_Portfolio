type Props = {
  title: string;
  description: string;
  tech: string[];
  img: string;
  github?: string;
  extraLink?: { href: string; label: string };
};

export default function ProjectCard({ title, description, tech, img, github, extraLink }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img src={img} alt={`${title} demo`} className="w-full" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm mt-1 text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {tech.map(t => (
            <span key={t} className="text-[10px] bg-gray-200 px-2 py-px rounded">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-3 space-x-4 text-sm">
          {github && <a href={github} className="text-blue-600 underline">GitHub</a>}
          {extraLink && <a href={extraLink.href} className="text-blue-600 underline">{extraLink.label}</a>}
        </div>
      </div>
    </div>
  );
}
