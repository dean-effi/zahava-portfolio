import Link from "next/link";

export default function Nav() {
  return (
    <nav className="px-4 py-8 text-sm font-medium tracking-tighter md:px-7 md:text-[18px] lg:px-9">
      <ul className="flex justify-between">
        <li className="italic">Zahava K.</li>
        <div className="space-x-4 md:space-x-5">
          <Link href={"#work"}>Work</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/about"}>About</Link>
        </div>
      </ul>
    </nav>
  );
}
