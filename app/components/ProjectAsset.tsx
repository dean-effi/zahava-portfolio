import { Asset, Info } from "@/projectsData";
import Image from "next/image";
import InfoVisual from "./InfoVisual";
import Carousel from "./Carousel";

export default function ProjectAsset({
  asset,
  info,
  index,
  altText,
}: {
  asset: Asset;
  info: Info | undefined;
  index: number;
  altText: string;
}) {
  return (
    <div>
      {Array.isArray(asset.src) ? (
        <Carousel images={asset.src} alt={altText} />
      ) : asset.type === "video" ? (
        <video
          className="w-full"
          src={asset.src}
          loop
          muted
          autoPlay
          aria-label={altText}
          playsInline>
          Your browser does not support the video tag.
        </video>
      ) : Boolean(asset.info && info) ? (
        <InfoVisual altText={altText} asset={asset} info={info!} />
      ) : (
        <Image
          alt={altText}
          className="w-full"
          src={asset.src}
          width={1920}
          height={1080}
        />
      )}
      {/* ${index !== 0 ? "lg:gap-20" : "lg:gap-35"} */}
      {asset.description && (
        <div
          className={`mt-5 mb-20 flex flex-col gap-3 text-base leading-tight tracking-tight md:mt-15 md:mb-[160px] md:flex-row md:justify-between md:gap-5 md:text-[27px] lg:gap-6 xl:gap-7 xl:text-4xl`}>
          {index === 0 ? (
            <h1 className="font-bold md:min-w-[25%]">
              {asset.description?.title}
            </h1>
          ) : (
            <h2 className="font-bold md:w-[20ch]">
              <span className="overflow-clip">
                {asset.description?.title}
              </span>
            </h2>
          )}
          <p
            className={`${index !== 0 ? "text-sm md:max-w-[70ch] md:text-lg lg:max-w-[90ch] lg:text-xl xl:text-2xl" : ""} `}>
            {asset.description?.paragraph}
          </p>
        </div>
      )}
    </div>
  );
}
