import projectsData from "@/projectsData";
import { notFound } from "next/navigation";
import ProjectAsset from "../components/ProjectAsset";
import ProjectNav from "../components/ProjectNav";

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
  const assetsElements = project?.assets.map((asset, i) => (
    <ProjectAsset
      key={i}
      index={i}
      asset={asset}
      info={project.info}
    />
  ));
  if (!project) notFound();
  const projectIndex = projectsData.indexOf(project);
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-950">
      <ProjectNav
        nextPage={projectsData[projectIndex + 1]?.name}
        previousPage={projectsData[projectIndex - 1]?.name}
      />
      <main className="m-auto max-w-[1100px] px-6 md:px-10 xl:max-w-[85%] xl:px-0">
        <div className="py-4 md:py-7 lg:py-10">{assetsElements}</div>
      </main>
    </div>
  );
}
