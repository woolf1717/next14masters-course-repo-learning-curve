import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsListPagination } from "@/api/products";

export default async function ProductsPage() {
  const products = await getProductsListPagination(1);

  return (
    <>
      <ProductList products={products} />
      <Pagination page={1} />
    </>
  );
}
