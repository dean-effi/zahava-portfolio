import projectsData from "@/projectsData";
import Link from "next/link";
import largeImg from "./assets/home.gif";
import mediumImg from "./assets/home-tablet.gif";
import smalImg from "./assets/hone-phone.gif";
import Image from "next/image";

export default function Home() {
  const projectLinks = projectsData.map((project, i) => {
    return (
      <Link
        key={project.name}
        href={project.name}>{`0${i + 1} / ${project.name}`}</Link>
    );
  });
  return (
    <div className="font-medium">
      <div className="mb-12">
        <div className="flex justify-center px-4 md:px-15 lg:px-20">
          <Image
            priority
            width={450}
            className="md:hidden"
            src={smalImg}
            alt=""
          />
          <Image
            priority
            width={650}
            className="hidden md:block lg:hidden"
            src={mediumImg}
            alt=""
          />
          <Image
            priority
            className="hidden lg:block"
            style={{ clipPath: "inset(0 0 2px 0)" }}
            width={1100}
            src={largeImg}
            alt=""
          />
        </div>
        <h1 className="z-10 text-center text-base leading-tight font-semibold md:text-[32px]">
          <span className="block">Hi!</span>
          I’m Zahava Kallus, and this is my work
        </h1>
      </div>
      <div
        id="work"
        className="grid gap-8 px-8 py-9 text-2xl text-[18px] font-medium md:px-9 md:text-2xl lg:px-16.25 lg:py-18.75">
        {projectLinks}
      </div>
    </div>
  );
}
