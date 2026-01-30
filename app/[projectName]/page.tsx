import projectsData from "@/projectsData";
import { notFound } from "next/navigation";
import ProjectAsset from "../components/ProjectAsset";
import Link from "next/link";

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
    <ProjectAsset key={i} asset={asset} info={project.info} />
  ));
  if (!project) notFound();
  const projectIndex = projectsData.indexOf(project);
  return (
    <div className="m-auto mt-10 grid grid-cols-[500px] justify-center space-y-10 bg-neutral-50 text-neutral-950">
      <div className="flex justify-between">
        <div>project {projectIndex + 1}.</div>
        <div>{project.name}</div>
      </div>
      {projectName}
      {assetsElements}
      <nav className="w-full">
        <ul className="mb-4 flex w-full justify-between text-xl">
          <li>
            {projectIndex > 0 && (
              <Link href={projectsData[projectIndex - 1].name}>
                {"<-"} previous project
              </Link>
            )}
          </li>
          <li>
            {projectIndex !== projectsData.length - 1 && (
              <Link href={projectsData[projectIndex + 1].name}>
                next project {"->"}
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
