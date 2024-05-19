import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByCategorySlug } from "@/api/products";
import { firstLetterToUppercase } from "@/ultis/firstLetterToUppercase";

export const generateMetadata = async ({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> => {
  return {
    title: firstLetterToUppercase(params.category),
  };
};

export default async function CatergoryProductsPage({
  params,
}: {
  params: { category: string; pageNumber: string };
}) {
  const products = await getProductsByCategorySlug(params.category);
  if (!products) {
    notFound();
  }

  const page = parseInt(params.pageNumber);
  const displayedProducts = products.slice((page - 1) * 4, page * 4);

  return (
    <>
      <h1 className="pt-6">{firstLetterToUppercase(params.category)}</h1>
      <ProductList products={displayedProducts} className="pt-16" />
      <div className="px-4 flex h-4/6 flex-col justify-evenly pt-8">
        <Pagination
          page={parseInt(params.pageNumber)}
          productsTotal={products.length}
          currentPath={`/categories/${params.category}`}
        />
      </div>
    </>
  );
}
