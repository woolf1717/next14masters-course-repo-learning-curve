import { type ProductListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";
import { AddToCartButton } from "@/ui/atoms/AddToCartButton";
import { addToCartAction } from "@/serverActions";
import { InStock } from "@/svg/InStock";

type SingleProductDescription = {
  product: ProductListItemFragment;
  className?: string;
};
export const SingleProductDescription = ({
  product: { name, price, description, id },
  className,
}: SingleProductDescription) => {
  const productId = id;

  return (
    <>
      <div className={`${className} mt-2 flex  flex-col gap-4`}>
        <h1 className=" text-2xl font-semibold text-grey-700">{name}</h1>
        <p className="text-lg font-medium text-grey-900">
          <span className="sr-only">Cena:</span>
          {formatMoney(price / 100)}
        </p>
        <p className="text-grey-700">{description}</p>
        <p className="text-sm text-grey-500">
          <span className="sr-only">Kategoria:</span>
        </p>
        <div className="flex flex-row">
          <div className="text-blue-400">
            <InStock />
          </div>
          <p className="pl-2"> In stock </p>
        </div>
        <form
          action={async () => {
            "use server";
            await addToCartAction(productId);
          }}
        >
          <input type="hidden" name="productId" value={productId} />
          <AddToCartButton />
        </form>
      </div>
    </>
  );
};
