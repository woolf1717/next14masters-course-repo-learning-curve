import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProductList } from "@/ui/organisms/ProductList";
import { getCollectionBySlug } from "@/api/collections";
import { Loading } from "@/ui/atoms/Loading";

export const generateMetadata = async ({
  params,
}: {
  params: { collection: string };
}): Promise<Metadata> => {
  const collection = await getCollectionBySlug({ slug: params.collection });

  if (!collection) {
    notFound();
  }
  return {
    title: `${collection.name} - Next.js Shop`,
    description: collection.description,
  };
};

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
    <Suspense fallback={<Loading />}>
      <h1 className="py-4 text-2xl font-bold">{collection.name}</h1>
      <span className="px-0.5 py-4 text-xl">{collection.description}</span>
      <section className="py-20">
        <ProductList products={collection.products} />
      </section>
    </Suspense>
  );
}
