import ProjectCard from "./components/ProjectCard";

const mockProjects = [
  {
    id: "1",
    name: "Projet Alpha",
    description: "Refonte du dashboard client",
    startDate: new Date("2026-03-01"),
    endDate: new Date("2026-04-30"),
    _count: { todo: 2, inProgress: 2, done: 1 },
  },
  {
    id: "2",
    name: "Projet Beta",
    description: "Migration vers Next.js 14",
    startDate: new Date("2026-03-15"),
    endDate: new Date("2026-05-15"),
    _count: { todo: 1, inProgress: 1, done: 1 },
  },
];

export default function Home() {
  const projects = mockProjects;

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold text-zinc-900 mb-6">Projets</h1>

      {projects.length === 0 ? (
        <p className="text-zinc-500">Aucun projet pour l'instant.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </main>
  );
}