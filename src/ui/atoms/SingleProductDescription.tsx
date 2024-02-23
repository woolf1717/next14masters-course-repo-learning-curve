import { type ProductListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";

type SingleProductDescription = {
  product: ProductListItemFragment;
  className?: string;
};
export const SingleProductDescription = ({
  product: { name, price, description },
  className,
}: SingleProductDescription) => {
  return (
    <>
      <div className={`${className} mt-2 flex  flex-col gap-4`}>
        <h1 className="text-sm font-semibold text-grey-700">{name}</h1>
        <p className="text-sm font-medium text-grey-900">
          <span className="sr-only">Cena:</span>
          {formatMoney(price / 100)}
        </p>
        <p>{description}</p>
        <p className="text-sm text-grey-500">
          <span className="sr-only">Kategoria:</span>
        </p>
        <button className="bg-slate-200 px-4 py-2 hover:bg-slate-500">
          Add to cart
        </button>
      </div>
    </>
  );
};
