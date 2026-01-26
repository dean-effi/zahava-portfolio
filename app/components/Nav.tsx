import Link from "next/link"

export default function Nav() {
  return (
    <nav className="text-sm md:text-[18px] font-medium  py-8 px-4 md:px-7 lg:px-9 tracking-tighter">
      <ul className=" flex  justify-between">
        <li className="italic">Zahava K.</li>
        <div className="space-x-4 md:space-x-5">
          <Link href={"#work"}>Work</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/about"}>About</Link>
        </div>
      </ul>
    </nav>
  )
}
