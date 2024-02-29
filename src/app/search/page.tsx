import { Suspense } from "react";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByQuery } from "@/api/products";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const { query } = searchParams;
  const productsListByQuery = await getProductsByQuery(decodeURI(query));

  if (productsListByQuery) {
    return (
      <>
        <Suspense>
          <h1 className="pb-4">{`Found ${productsListByQuery.length} item's for phrase "${decodeURI(query)}"`}</h1>
          <ProductList products={productsListByQuery} />
        </Suspense>
      </>
    );
  } else {
    return <Suspense>{`No products found for phrase ${query}.`}</Suspense>;
  }
}
