import { Asset, Info } from "@/projectsData";
import Image from "next/image";
import InfoVisual from "./InfoVisual";

export default function ProjectAsset({
  asset,
  info,
}: {
  asset: Asset;
  info: Info | undefined;
}) {
  return (
    <article>
      {Array.isArray(asset.src) ? (
        <Image src={asset.src[0]} alt="" width={1280} height={720} />
      ) : asset.type === "video" ? (
        <video
          className="w-full"
          src={asset.src}
          loop
          muted
          autoPlay
          playsInline
          aria-hidden="true">
          Your browser does not support the video tag.
        </video>
      ) : Boolean(asset.info && info) ? (
        <InfoVisual asset={asset} info={info!} />
      ) : (
        <Image alt="" src={asset.src} width={1280} height={720} />
      )}
      {asset.description && (
        <div className="mt-5 mb-20 flex flex-col gap-3 leading-tight tracking-tight md:mt-15 md:mb-[160px] md:flex-row md:gap-18 md:text-[27px] lg:gap-35">
          <h2 className="font-smibold font-bold">
            {asset.description?.title}
          </h2>
          <p className="">{asset.description?.paragraph}</p>
        </div>
      )}
    </article>
  );
}
