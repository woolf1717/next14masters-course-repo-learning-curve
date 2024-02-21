import { type ProductListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
  product: ProductListItemFragment;
};
export const ProductListItemDescription = ({
  product: { categories, name, price },
}: ProductListItemDescriptionProps) => {
  return (
    <div className="mt-2 flex justify-between">
      <div>
        <h3 className="text-sm font-semibold text-grey-700">{name}</h3>
        {categories[0] && (
          <p className="text-sm text-grey-500">
            <span className="sr-only">Kategoria:</span>
            {categories[0].name}
          </p>
        )}
      </div>
      <p className="text-sm font-medium text-grey-900">
        <span className="sr-only">Cena:</span>
        {formatMoney(price / 100)}
      </p>
    </div>
  );
};
