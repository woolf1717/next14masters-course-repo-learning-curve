import { ProductItemType } from "@/ui/types";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
  product: ProductItemType;
};
export const ProductListItemDescription = ({
  product: { category, name, price },
}: ProductListItemDescriptionProps) => {
  return (
    <div className="mt-2 flex justify-between">
      <div>
        <h3 className="text-sm font-semibold text-grey-700">{name}</h3>
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
  );
};
