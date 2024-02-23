import { notFound } from "next/navigation";
import { ProductList } from "@/ui/organisms/ProductList";
import { getCollectionBySlug } from "@/api/collections";

export default async function CollectionPage({
  params,
}: {
  params: { collection: string };
}) {
  const collection = await getCollectionBySlug({ slug: params.collection });

  if (!collection) {
    return notFound();
  }

  return (
    <>
      <h1 className="py-4 text-2xl font-bold">{collection.name}</h1>
      <span className="px-0.5 py-4 text-xl">{collection.description}</span>
      <section className="py-20">
        <ProductList products={collection.products} />
      </section>
    </>
  );
}
