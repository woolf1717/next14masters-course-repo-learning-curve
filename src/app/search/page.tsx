import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByQuery } from "@/api/products";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const { query } = searchParams;
  const productsListByQuery = await getProductsByQuery(query);

  if (productsListByQuery) {
    return (
      <>
        <h1 className="pb-4">{`Found ${productsListByQuery.length} item's for phrase "${query}"`}</h1>
        <ProductList products={productsListByQuery} />
      </>
    );
  } else {
    return `No products found for phrase ${query}.`;
  }
}
