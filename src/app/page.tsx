import { CollectionsBanner } from "@/ui/organisms/CollectionsBanner";
import { getCollectionsList } from "@/api/collections";

export default async function HomePage() {
  const collections = await getCollectionsList();

  return (
    <>
      <CollectionsBanner collections={collections} />
    </>
  );
}
