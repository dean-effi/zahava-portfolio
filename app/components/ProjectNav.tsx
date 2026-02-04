import Link from "next/link";

export default function ProjectNav({
  nextPage,
  previousPage,
}: {
  nextPage: string | undefined;
  previousPage: string | undefined;
}) {
  const disabledClasses =
    "pointer-events-none cursor-none text-gray-400";
  return (
    <nav className="sticky top-0 z-20 w-full border-b-1 border-black bg-neutral-100 px-2 md:border-b-1 md:px-4">
      <ul className="m-auto grid w-full max-w-[1100px] grid-cols-3 justify-items-center p-5 px-3 text-base md:px-5 md:text-lg lg:text-xl xl:max-w-[85%] xl:px-0">
        <li
          className={`justify-self-start text-left ${!previousPage && disabledClasses}`}>
          <Link
            aria-label="previous page"
            aria-disabled={!previousPage}
            href={previousPage || "#"}
            className="flex items-center gap-1 md:gap-[5px]">
            <span>⟵</span>
            previous
          </Link>
        </li>
        <li className="col-start-2 font-medium italic">
          <Link href={"/"}>Main Page</Link>
        </li>

        <li
          className={`justify-self-end text-right ${!nextPage && disabledClasses}`}>
          <Link
            aria-label="next page"
            aria-disabled={!nextPage}
            href={nextPage || "#"}
            className="flex items-center gap-1 md:gap-[5px]">
            next
            <span>⟶</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
