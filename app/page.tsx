import projectsData from "@/projectsData";
import Nav from "./components/Nav";
import Link from "next/link";

export default function Home() {
  const projectLinks = projectsData.map((project, i) => {
    return (
      <Link
        key={project.name}
        href={project.name}>{`0${i + 1}/ ${project.name}`}</Link>
    );
  });
  return (
    <div className="text-purple-dark bg-purple-light min-h-screen space-y-6 p-10 font-medium">
      <Nav />
      <div className="m-auto h-100 w-100 bg-purple-600"></div>
      <h1 className="text-center md:text-2xl lg:text-3xl">
        <span className="block">Hi!</span>
        I’m Zahava Kallus, and this is my work
      </h1>
      <div id="work" className="grid gap-4 text-2xl font-medium">
        {projectLinks}
      </div>
      <footer className="pt-10 text-center">
        © Zahava Kallus 2026 All Rights Reserved
      </footer>
    </div>
  );
}
