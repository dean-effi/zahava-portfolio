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
    <div className="bg-neutral-50 px-6 text-neutral-950 md:px-10">
      <main className="m-auto max-w-[1100px]">
        <header className="flex justify-between pt-6 pb-2 text-sm md:text-base lg:py-8 lg:pb-3 xl:text-xl">
          <div>project {projectIndex + 1}.</div>
          <h1>{project.name}</h1>
        </header>
        {assetsElements}
      </main>
      <nav className="mt-5 w-full border-t-1 border-black">
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
