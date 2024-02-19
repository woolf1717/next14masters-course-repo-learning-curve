import { type ProductItemType } from "@/ui/types";
import { formatMoney } from "@/utils";

type SingleProductDescription = {
  product: ProductItemType;
};
export const SingleProductDescription = ({
  product: { category, name, price, description },
}: SingleProductDescription) => {
  return (
    <>
      <div className="mt-2 flex justify-between">
        <div>
          <h1 className="text-sm font-semibold text-grey-700">{name}</h1>
          <p className="text-sm text-grey-500">
            <span className="sr-only">Kategoria:</span>
            {category}
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
