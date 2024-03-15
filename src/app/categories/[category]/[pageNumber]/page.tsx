import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByCategorySlug } from "@/api/products";
import { firstLetterToUppercase } from "@/ultis/firstLetterToUppercase";

export const generateStaticParams = async ({
  params,
}: {
  params: { category: string };
}) => {
  if (params.category === "t-shirts") {
    return [{ pageNumber: "1" }, { pageNumber: "2" }];
  } else {
    return [{ pageNumber: "1" }];
  }
};
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

  return (
    <>
      <h1>{firstLetterToUppercase(params.category)}</h1>
      <ProductList products={products} />
      <Pagination
        page={parseInt(params.pageNumber)}
        productsTotal={products.length}
        currentPath={`/categories/${params.category}`}
      />
    </>
  );
}
