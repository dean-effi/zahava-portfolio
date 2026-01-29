import projectsData from "@/projectsData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projectsData.map(project => ({
    projectName: project.name,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectName: string }>;
}) {
  const projectName = decodeURIComponent((await params).projectName);
  const project = projectsData.find(p => projectName === p.name);

  if (!project) notFound();
  return (
    <div className="bg-neutral-50 text-neutral-950">
      {projectName}
    </div>
  );
}
