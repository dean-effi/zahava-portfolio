import { Asset, Info } from "@/projectsData";
import Image from "next/image";

export default function InfoVisual({
  asset,
  info,
}: {
  asset: Asset;
  info: Info;
}) {
  return (
    <div>
      <Image
        alt=""
        src={asset.src as string}
        width={500}
        height={400}
      />
      <ul className="flex gap-5">
        <li>{info.course}</li>
        <li>{info.instructor}</li>
      </ul>
    </div>
  );
}
