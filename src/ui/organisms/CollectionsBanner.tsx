import { type CollectionsBannerFragment } from "@/gql/graphql";
import { CollectionsBannerItem } from "@/ui/molecules/CollectionBannerItem";

export const CollectionsBanner = ({
  collections,
}: {
  collections: CollectionsBannerFragment[];
}) => {
  return (
    <div className="flex gap-6">
      {collections.map((collection) => (
        <div key={collection.id}>
          <CollectionsBannerItem collection={collection} />
        </div>
      ))}
    </div>
  );
};
