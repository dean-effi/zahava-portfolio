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
      <ul className="m-auto grid w-full max-w-[1100px] grid-cols-3 justify-items-center p-5 px-3 text-base md:px-5 md:text-lg lg:text-xl xl:max-w-[85%] xl:px-0">
        {previousPage && (
          <li className="justify-self-start text-left">
            <Link aria-label="previous page" href={previousPage}>
              ⟵ previous
            </Link>
          </li>
        )}
        <li className="col-start-2 font-medium italic">
          <Link href={"/"}>Main Page</Link>
        </li>
        {nextPage && (
          <li className="justify-self-end">
            <Link aria-label="next page" href={nextPage}>
              next ⟶
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
