import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/api/products";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductsList = async ({
  dataTestId,
}: {
  dataTestId?: string;
}) => {
  const products = await getProductsList();

  await sleep(500);
  return <ProductList products={products.slice(-4)} dataTestId={dataTestId} />;
};
