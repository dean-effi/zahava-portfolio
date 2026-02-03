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
        <div className="justify-self-start">
          {previousPage && (
            <li className="text-left">
              <Link href={previousPage}>⟵ previous</Link>
            </li>
          )}
        </div>
        <li className="font-medium italic">
          <Link href={"/"}>Main Page</Link>
        </li>
        <div className="justify-self-end">
          {nextPage && (
            <li>
              <Link href={nextPage}>next ⟶</Link>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
}
