import { Asset } from "@/projectsData";
import Image from "next/image";

export default function InfoVisual({
  asset,
  info,
  altText,
}: {
  altText: string;
  asset: Asset;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  info: any;
}) {
  const infoBoxes = Object.keys(info).map(name => {
    return (
      <li
        key={name}
        className="max-w-[30ch] min-w-min md:w-[20ch] md:text-base lg:w-[28ch] lg:text-lg">
        {" "}
        <div className="font-bold">{name}:</div>
        <div>{info[name]}</div>
      </li>
    );
  });
  return (
    <div>
      <Image
        alt={altText}
        src={asset.src as string}
        width={1920}
        height={1080}
        className="w-full"
        priority
      />
      <ul className="flex flex-col flex-wrap justify-between gap-4 py-5 pb-10 capitalize md:flex-row md:pb-22 lg:pb-26">
        {infoBoxes}
      </ul>
    </div>
  );
}
