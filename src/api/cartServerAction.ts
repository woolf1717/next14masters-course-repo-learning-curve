"use server";

import { cookies } from "next/headers";

export async function handleClearCart() {
  cookies().set("cartId", "");
}
