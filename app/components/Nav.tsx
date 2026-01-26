"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Nav() {
  const path = usePathname();
  return (
    <nav className="px-4 py-8 text-sm font-medium tracking-tighter md:px-7 md:text-[18px] lg:px-9">
      <ul className="flex justify-between">
        <li className="italic">
          <Link href={"/"}>Zahava K.</Link>{" "}
        </li>
        <div className="space-x-4 md:space-x-5">
          {path === "/" && <Link href={"#work"}>Work</Link>}
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/about"}>About</Link>
        </div>
      </ul>
    </nav>
  );
}
