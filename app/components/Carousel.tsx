"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
  alt: string;
  interval?: number;
}

export default function Carousel({
  images,
  alt,
  interval = 3000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="grid w-full grid-cols-1 grid-rows-1 overflow-hidden">
      {images.map((src, i) => (
        <div
          key={src}
          className={`col-start-1 row-start-1 transition-opacity duration-1000 ease-in-out ${
            i === currentIndex ? "opacity-100" : "opacity-0"
          }`}>
          <Image
            src={src}
            alt={`${alt} - view ${i + 1}`}
            width={1920}
            height={1080}
            priority={i === 0}
            className="h-auto w-full"
          />
        </div>
      ))}
    </div>
  );
}
