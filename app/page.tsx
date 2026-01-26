import projectsData from "@/projectsData"
import Nav from "./components/Nav"
import Link from "next/link"

export default function Home() {
  const projectLinks = projectsData.map((project, i) => {
    return (
      <Link
        key={project.name}
        href={project.name}
      >{`0${i + 1}/ ${project.name}`}</Link>
    )
  })
  return (
    <div className="font-medium  text-purple-dark space-y-6 p-10 bg-purple-light min-h-screen">
      <Nav />
      <div className="w-100 h-100 bg-purple-600 m-auto"></div>
      <h1 className="md:text-2xl lg:text-3xl text-center">
        <span className="block ">Hi!</span>
        I’m Zahava Kallus, and this is my work
      </h1>
      <div id="work" className="grid font-medium text-2xl gap-4">
        {projectLinks}
      </div>
      <footer className="text-center pt-10">
        © Zahava Kallus 2026 All Rights Reserved
      </footer>
    </div>
  )
}
