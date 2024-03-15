import { type ProductSortBy, type SortDirection } from "@/gql/graphql";
import { getProductsListPagination, getProductsTotal } from "@/api/products";

import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { SortListBy } from "@/ui/organisms/SortListBy";

export default async function ProductsPage({
  params,
  searchParams,
}: {
  params: { pageNumber: string };
  searchParams: { sortBy: ProductSortBy; order: SortDirection };
}) {
  const { sortBy, order } = searchParams;
  const page = parseInt(params.pageNumber);
  const productsTotal = await getProductsTotal();
  const products = await getProductsListPagination(page, sortBy, order);

  return (
    <>
      <SortListBy />
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
