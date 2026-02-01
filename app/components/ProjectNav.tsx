import Link from "next/link";

export default function ProjectNav({
  nextPage,
  previousPage,
}: {
  nextPage: string | undefined;
  previousPage: string | undefined;
}) {
  return (
    <nav className="sticky top-0 z-20 w-full border-b-1 border-black bg-neutral-100 px-2 md:border-b-1 md:px-4">
      <ul className="m-auto flex w-full max-w-[1100px] justify-between p-5 px-3 text-base md:px-5 md:text-lg lg:text-xl xl:max-w-[85%] xl:px-0">
        <li className="text-left md:w-[10ch]">
          {previousPage && (
            <Link href={previousPage}>⟵ previous</Link>
          )}
        </li>
        <li className="font-medium italic">
          <Link href={"/"}>Main Page</Link>
        </li>
        <li className="text-right md:w-[10ch]">
          {nextPage && <Link href={nextPage}>next ⟶</Link>}
        </li>
      </ul>
    </nav>
  );
}
