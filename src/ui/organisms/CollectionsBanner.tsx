import { type CollectionsBannerFragment } from "@/gql/graphql";
import { CollectionsBannerItem } from "@/ui/molecules/CollectionBannerItem";

export const CollectionsBanner = ({
  collections,
}: {
  collections: CollectionsBannerFragment[];
}) => {
  return (
    <ul className="flex gap-6 flex-col lg:flex-row items-center mt-12">
      {collections.map((collection) => (
        <li key={collection.id}>
          <CollectionsBannerItem collection={collection} />
        </li>
      ))}
    </ul>
  );
};
