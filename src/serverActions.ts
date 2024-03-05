"use server";

import { revalidatePath } from "next/cache";
import {
  CartRemoveProductDocument,
  CartSetProductQuantityDocument,
} from "@/gql/graphql";

import { executeGraphql } from "@/api/graphqlQurey";

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
