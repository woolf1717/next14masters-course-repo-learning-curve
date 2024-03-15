import { getProductsListPagination, getProductsTotal } from "@/api/products";

import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPage({
  params,
}: {
  params: { pageNumber: string };
}) {
  const page = parseInt(params.pageNumber);
  const productsTotal = await getProductsTotal();
  const products = await getProductsListPagination(page);

  return (
    <>
      <ProductList products={products} />
      <div className="px-4 flex h-4/6 flex-col justify-evenly pt-2">
        <Pagination
          page={page}
          productsTotal={productsTotal}
          currentPath="/products"
        />
      </div>
    </>
  );
}
