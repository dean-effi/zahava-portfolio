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
        <Image src={asset.src[0]} alt="" width={500} height={400} />
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
        <Image alt="" src={asset.src} width={500} height={400} />
      )}
      {asset.description && (
        <div>
          <h2 className="my-6 text-xl font-bold">
            {asset.description?.title}
          </h2>
          <p>{asset.description?.paragraph}</p>
        </div>
      )}
    </article>
  );
}
