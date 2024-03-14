import { type Metadata } from "next/types";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";
import { getProductById } from "@/api/products";
import { SingleProductDescription } from "@/ui/atoms/SingleProductDescription";
import { ReviewsSection } from "@/ui/organisms/ReviewsSection";
import { getReviewsById } from "@/api/reviews";

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
  const productId = params.productId;

  const product = await getProductById(productId);

  const reviews = await getReviewsById(productId);

  if (!product) {
    notFound();
  }
  const lastFiveReviews = reviews.product?.reviews.slice(-5) || [];

  return (
    <>
      <article className="flex w-full p-4 h-5/6 justify-around gap-4">
        {product.images[0] && (
          <ProductCoverImage
            src={product.images[0]?.url}
            alt={product.name}
            className={"basis-1/2"}
          />
        )}
        <SingleProductDescription product={product} className={"basis-1/2"} />
      </article>
      <ReviewsSection productId={productId} lastFiveReviews={lastFiveReviews} />

      <aside className="pt-4">
        <Suspense fallback={"Ładowanie..."}>
          <SuggestedProductsList dataTestId={"related-products"} />
        </Suspense>
      </aside>
    </>
  );
}
