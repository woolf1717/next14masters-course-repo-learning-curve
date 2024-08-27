import { CollectionsBanner } from "@/ui/organisms/CollectionsBanner";
import { ImageSlider } from "@/ui/atoms/ImageSlider";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";
import { getCollectionsList } from "@/api/collections";

export default async function HomePage() {
  const collections = await getCollectionsList();

  return (
    <>
      <ImageSlider />
      <CollectionsBanner collections={collections} />

      <div className="pt-14">
        <h2 className="p-2">Suggested products</h2>
        <SuggestedProductsList />
      </div>
    </>
  );
}
