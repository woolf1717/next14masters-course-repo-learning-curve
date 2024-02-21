import { type ProductListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";

type SingleProductDescription = {
  product: ProductListItemFragment;
};
export const SingleProductDescription = ({
  product: { categories, name, price, description },
}: SingleProductDescription) => {
  return (
    <>
      <div className="mt-2 flex justify-between">
        <div>
          <h1 className="text-sm font-semibold text-grey-700">{name}</h1>
          <p className="text-sm text-grey-500">
            <span className="sr-only">Kategoria:</span>
            {categories[0] && categories[0]?.name}
          </p>
        </div>
        <p className="text-sm font-medium text-grey-900">
          <span className="sr-only">Cena:</span>
          {formatMoney(price / 100)}
        </p>
      </div>
      <p>{description}</p>
    </>
  );
};
