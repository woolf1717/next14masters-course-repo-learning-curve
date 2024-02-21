import { type Metadata } from "next/types";
import { Suspense } from "react";
import { notFound } from "next/navigation";
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

  if (!product) {
    notFound();
  }
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

  if (!product) {
    notFound();
  }
  return (
    <>
      <article className="max-w-lg m-auto">
        {product.images[0] && (
          <ProductCoverImage src={product.images[0]?.url} alt={product.name} />
        )}
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
