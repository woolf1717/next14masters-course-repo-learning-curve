"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import {
  CartRemoveProductDocument,
  CartSetProductQuantityDocument,
  ReviewCreateDocument,
} from "@/gql/graphql";

import { executeGraphql } from "@/api/graphqlQuery";
import { type RowFormDataType } from "@/ui/molecules/AddReviewsForm";
import { addProductToCart } from "@/api/cart";

export const removeItem = (cartId: string, productId: string) => {
  return executeGraphql({
    query: CartRemoveProductDocument,
    variables: { cartId, productId },
  });
};

export const changeItemQuantity = async (
  cartId: string,
  productId: string,
  quantity: number
) => {
  const changeItemQuantity = await executeGraphql({
    query: CartSetProductQuantityDocument,
    variables: {
      id: cartId,
      productId,
      quantity,
    },
  });

  revalidatePath("/cart");
  return changeItemQuantity;
};

export const sendReview = async (rowFormData: RowFormDataType) => {
  const addReview = await executeGraphql({
    query: ReviewCreateDocument,
    variables: rowFormData,
  });

  revalidateTag("product");
  return addReview;
};

export const addToCartAction = async (productId: string) => {
  await addProductToCart(productId);

  revalidateTag("cart");
};
