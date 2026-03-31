import Link from "next/link";

type Project = {
  id: string;
  name: string;
  description?: string | null;
  startDate: Date;
  endDate: Date;
  _count?: {
    todo: number;
    inProgress: number;
    done: number;
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

        <div className="flex gap-3 text-xs font-medium">
          <span className="text-zinc-500">À faire : {project._count?.todo ?? 0}</span>
          <span className="text-blue-500">En cours : {project._count?.inProgress ?? 0}</span>
          <span className="text-green-600">Terminé : {project._count?.done ?? 0}</span>
        </div>
      </div>
    </Link>
  );
}