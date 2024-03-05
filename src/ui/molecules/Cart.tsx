import Link from "next/link";
import { getCartFromCookies } from "@/api/cart";

export const Cart = async () => {
  const cart = await getCartFromCookies();

  const quantity = cart?.items.length ?? 0;
  return <Link href="/cart">{quantity}</Link>;
};
