import { notFound } from "next/navigation";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductList = ({
  products,
  dataTestId = "products-list",
}: {
  products: ProductListItemFragment[];
  dataTestId?: string;
}) => {
  if (!products) {
    notFound();
  }

  return (
    <ul
      data-testid={dataTestId ? dataTestId : "products-list"}
      className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:-grid-cols-3 lg:grid-cols-4"
    >
      {products.map((product, id) => {
        return <ProductListItem key={id} product={product} />;
      })}
    </ul>
  );
};
