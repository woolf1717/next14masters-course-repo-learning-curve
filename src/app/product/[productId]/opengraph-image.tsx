// Zaimplementuj opengraph-image.tsx dla pojedynczych produktów. Grafika powinna zawierać nazwę produktu, krótki opis, kategorię i miniaturkę obrazka.

import { ImageResponse } from "next/og";
import { getProductById } from "@/api/products";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export default async function opengraphImage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProductById(params.productId);

  if (!product) {
    return new ImageResponse(
      (
        <>
          <span>Not found</span>
        </>
      ),
      { ...size }
    );
  }
  return new ImageResponse(
    (
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.categories[0]?.name}</p>
        <img src={product.images[0]?.url} alt={product.name} />
      </div>
    ),
    { ...size }
  );
}
