import NextLink from "next/link";
import NextImage from "next/image";
import { type CollectionsBannerFragment } from "@/gql/graphql";

import { bannersImages } from "@/app/staticData/bannersImages";

export const CollectionsBannerItem = ({
  collection,
}: {
  collection: CollectionsBannerFragment;
}) => {
  const { name, slug, id } = collection;

  const src = bannersImages[parseInt(id) - 1]?.src;
  const alt = bannersImages[parseInt(id) - 1]?.alt;

  return (
    <NextLink href={`/collections/${slug}`}>
      {src && alt && (
        <NextImage
          src={src}
          alt={alt}
          height={300}
          className="hover:opacity-60 transform rounded-lg transition duration-400 ease-in-out cursor-pointer hover:scale-105"
        />
      )}
      <h2 className="font-bold p-2 text-md">{name}</h2>
    </NextLink>
  );
};
