"use client";

import NextImage from "next/image";

export const ProductCoverImage = async ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  return (
    <div
      className={`${className} flex flex-col justify-center aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100`}
    >
      <NextImage
        width={320}
        height={320}
        alt={alt}
        src={src}
        className={` h-full w-full object-cover object-center p-4 transition-transform hover:scale-105`}
      />
    </div>
  );
};
