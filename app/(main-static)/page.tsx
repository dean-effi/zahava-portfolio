import projectsData from "@/projectsData";
import Link from "next/link";
import largeImg from "../assets/home.gif";
import mediumImg from "../assets/home-tablet.gif";
import smalImg from "../assets/hone-phone.gif";
export default function Home() {
  const projectLinks = projectsData.map(project => {
    return (
      <li key={project.name}>
        <Link href={project.name}>{`${project.title}`}</Link>
      </li>
    );
  });
  return (
    <div className="font-medium">
      <header className="mb-8 lg:mb-12">
        <picture className="flex justify-center px-4 md:px-15 lg:px-20">
          <source srcSet={largeImg.src} media="(width >= 1280px)" />
          <source srcSet={mediumImg.src} media="(width >= 800px)" />
          <img
            className="h-auto max-w-[450px] md:max-w-[650px] lg:max-w-[1150px]"
            style={{ clipPath: "inset(0 0 2px 0)" }}
            fetchPriority="high"
            src={smalImg.src}
            alt=""
          />
        </picture>
        <h1 className="z-10 text-center text-base leading-tight font-semibold md:text-[32px] lg:text-[37px]">
          <span className="block">Hi!</span>
          I’m Zahava Kallus, and this is my work
        </h1>
      </header>
      <main id="work" className="">
        <ul className="grid gap-8 px-8 py-9 text-2xl text-[18px] font-medium md:gap-9 md:px-10 md:text-2xl lg:gap-10 lg:px-16.25 lg:py-18.75 lg:text-[26px] xl:px-[100px]">
          {projectLinks}
        </ul>
      </main>
    </div>
  );
}
