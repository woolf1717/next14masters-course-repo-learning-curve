import { cookies } from "next/headers";
import {
  CartAddProductDocument,
  CartCreateDocument,
  CartGetByIdDocument,
  ProductGetByIdDocument,
} from "@/gql/graphql";

import { executeGraphql } from "@/api/graphqlQurey";

export async function getOrCreateCart() {
  const existingCart = await getCartFromCookies();

  if (existingCart) {
    return existingCart;
  }

  const newCart = await createCart();

  if (!newCart) {
    throw new Error("Cart not created");
  }

  return newCart;
}

export async function addProductToCart(cartId: string, productId: string) {
  const { product } = await executeGraphql({
    query: ProductGetByIdDocument,
    variables: {
      id: productId,
    },
  });

  if (!product) {
    throw new Error("Product not found");
  }

  const graphqlResponse = await executeGraphql({
    query: CartAddProductDocument,
    variables: {
      id: cartId,
      productId: productId,
      quantity: 1,
    },
  });

  return graphqlResponse;
}

export async function getCartFromCookies() {
  const cartId = cookies().get("cartId")?.value;

  if (cartId) {
    const oldCart = await executeGraphql({
      query: CartGetByIdDocument,
      variables: {
        id: cartId,
      },
      next: {
        tags: ["cart"],
      },
    });

    if (oldCart) {
      return oldCart.cart;
    }
  }
}

export async function createCart() {
  const graphqlResponse = await executeGraphql({ query: CartCreateDocument });

  const cartId = graphqlResponse.cartFindOrCreate.id;
  cookies().set("cartId", cartId);

  return graphqlResponse.cartFindOrCreate;
}
