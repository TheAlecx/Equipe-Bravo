import Link from "next/link";

type Project = {
  id: string;
  name: string;
  description?: string | null;
  startDate: Date;
  endDate: Date;
  _count?: {
    tasks: number;
  };
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/${project.id}`}>
      <div className="bg-white border border-zinc-200 rounded-xl p-5 hover:shadow-md transition-shadow cursor-pointer flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-zinc-900">{project.name}</h2>

        {project.description && (
          <p className="text-sm text-zinc-500 line-clamp-2">{project.description}</p>
        )}

        <div className="text-xs text-zinc-400">
          <span>{new Date(project.startDate).toLocaleDateString("fr-CA")}</span>
          <span> → </span>
          <span>{new Date(project.endDate).toLocaleDateString("fr-CA")}</span>
        </div>

        <div className="text-sm text-zinc-600">
          {project._count?.tasks ?? 0} tâche{(project._count?.tasks ?? 0) !== 1 ? "s" : ""}
        </div>
      </div>
    </Link>
  );
}