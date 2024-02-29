import { CollectionsBanner } from "@/ui/organisms/CollectionsBanner";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";
import { getCollectionsList } from "@/api/collections";

export default async function HomePage() {
  const collections = await getCollectionsList();

  return (
    <>
      <CollectionsBanner collections={collections} />
      <div className="pt-4">
        <SuggestedProductsList />
      </div>
    </>
  );
}
