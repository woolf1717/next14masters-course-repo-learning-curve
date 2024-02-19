import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsListPagination } from "@/api/products";

// export function generateStaticParams() {
//   return [
//     { page: "1" },
//     { page: "2" },
//     { page: "3" },
//     { page: "4" },
//     { page: "5" },
//   ];
// }

export default async function ProductsPage({
  params,
}: {
  params: { page: string };
}) {
  const products = await getProductsListPagination(
    params ? parseInt(params.page) : 1
  );

  return (
    <>
      <ProductList products={products} />
      <Pagination page={params.page} />
    </>
  );
}
