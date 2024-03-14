
import Stripe from "stripe";
import { cookies } from "next/headers";

import { redirect } from "next/navigation";
import { executeGraphql } from "@/api/graphqlQuery";
import {
  CartAddProductDocument,
  CartCreateDocument,
  CartGetByIdDocument,
  ProductGetByIdDocument,
} from "@/gql/graphql";

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

export async function handlePaymentAction() {
  "use server";
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Missing STRIPE_SECRET_KEY");
  }
  const cart = await getCartFromCookies();
  if (!cart) {
    return;
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
    typescript: true,
  });

  const checkoutSession = await stripe.checkout.sessions.create({
    payment_method_types: ["card", "blik", "p24"],
    metadata: {
      cartId: cart.id,
    },
    line_items: cart.items.map((item) => ({
      price_data: {
        currency: "pln",
        product_data: {
          name: item.product.name,
        },
        unit_amount: item.product.price,
      },
      quantity: item.quantity,
    })),
    mode: "payment",
    success_url:
      "http://localhost:3000/cart/success?sessionId={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:3000/cart/cancel",
  });

  if (!checkoutSession.url) {
    throw new Error("Something went wrong");
  }

  cookies().set("cartId", "");
  redirect(checkoutSession.url);
}
