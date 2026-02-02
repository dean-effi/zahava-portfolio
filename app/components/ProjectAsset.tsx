import { Asset, Info } from "@/projectsData";
import Image from "next/image";
import InfoVisual from "./InfoVisual";
import Carousel from "./Carousel";

export default function ProjectAsset({
  asset,
  info,
  index,
}: {
  asset: Asset;
  info: Info | undefined;
  index: number;
}) {
  return (
    <article>
      {Array.isArray(asset.src) ? (
        <Carousel images={asset.src} alt="" />
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
        <Image
          alt=""
          className="w-full"
          src={asset.src}
          width={1920}
          height={1080}
        />
      )}
      {asset.description && (
        <div
          className={`mt-5 mb-20 flex flex-col gap-3 text-base leading-tight tracking-tight md:mt-15 md:mb-[160px] md:flex-row md:gap-18 md:text-[27px] xl:text-4xl ${index !== 0 ? "lg:gap-20" : "lg:gap-35"} `}>
          <h2 className="font-smibold font-bold">
            {asset.description?.title}
          </h2>
          <p
            className={`${index !== 0 ? "text-sm md:max-w-[70%] md:text-lg lg:text-xl xl:text-2xl" : ""}`}>
            {asset.description?.paragraph}
          </p>
        </div>
      )}
    </article>
  );
}
