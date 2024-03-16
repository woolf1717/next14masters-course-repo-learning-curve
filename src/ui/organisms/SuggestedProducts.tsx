import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/api/products";

export const SuggestedProductsList = async ({
  dataTestId,
}: {
  dataTestId?: string;
}) => {
  const products = await getProductsList();

  return <ProductList products={products.slice(-4)} dataTestId={dataTestId} />;
};
