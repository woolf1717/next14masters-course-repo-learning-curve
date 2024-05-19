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
      <div className="flex justify-between pt-6">
        <h1 className="m-4 p-2 mt-0 pt-0">All products</h1>
        <SortListBy />
      </div>
      <ProductList products={products} className="pt-16" />
      <div className="px-4 flex h-4/6 flex-col justify-evenly pt-8">
        <Pagination
          page={page}
          productsTotal={productsTotal}
          currentPath="/products"
        />
      </div>
    </>
  );
}
