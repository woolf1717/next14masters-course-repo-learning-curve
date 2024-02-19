import { type Metadata } from "next/types";
import { Suspense } from "react";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";
import { getProductById } from "@/api/products";
import { SingleProductDescription } from "@/ui/atoms/SingleProductDescription";

export const generateMetadata = async ({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> => {
  const product = await getProductById(params.productId);

  return {
    title: `${product.name} - Next.js Shop`,
    description: product.description,
  };
};

export default async function SingleProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProductById(params.productId);

  return (
    <>
      <article className="max-w-lg m-auto">
        <ProductCoverImage {...product.coverImage} />
        <SingleProductDescription product={product} />
      </article>
      <aside className="pt-4">
        <Suspense fallback={"Ładowanie..."}>
          <SuggestedProductsList />
        </Suspense>
      </aside>
    </>
  );
}
