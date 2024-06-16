"use client";

import { handleClearCart } from "@/api/cartServerAction";

export async function ClearCartForm() {
  return <form action={handleClearCart}></form>;
}
