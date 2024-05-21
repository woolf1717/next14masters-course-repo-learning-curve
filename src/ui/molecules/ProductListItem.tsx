import Link from "next/link";
import { ProductCoverImage } from "../atoms/ProductCoverImage.1";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
  product: ProductListItemFragment;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <li>
      <Link href={`/product/${product.id}`}>
        <article>
          {product.images[0] && (
            <ProductCoverImage src={product.images[0].url} alt="" />
          )}
          <ProductListItemDescription product={product} />
        </article>
      </Link>
    </li>
  );
};
