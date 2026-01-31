import { Asset } from "@/projectsData";
import Image from "next/image";

export default function InfoVisual({
  asset,
  info,
}: {
  asset: Asset;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  info: any;
}) {
  const infoBoxes = Object.keys(info).map(name => {
    return (
      <li
        key={name}
        className="w-[12ch] text-sm md:w-[15ch] md:text-base lg:w-[22ch] lg:text-lg">
        {" "}
        <div className="font-bold">{name}:</div>
        <div className="max-w-[50ch]">{info[name]}</div>
      </li>
    );
  });
  return (
    <div>
      <Image
        alt=""
        src={asset.src as string}
        width={1280}
        height={720}
        className="w-full"
      />
      <ul className="flex flex-wrap justify-between gap-4 py-5 pb-10 capitalize md:pb-22 lg:pb-26">
        {infoBoxes}
      </ul>
    </div>
  );
}
