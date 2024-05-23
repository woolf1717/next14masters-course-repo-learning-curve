"use client";

import { useTransition } from "react";
import { removeItem } from "@/serverActions";

export const RemoveButton = ({
  cartId,
  productId,
}: {
  cartId: string;
  productId: string;
}) => {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className="text-blue-500 disabled:text-gray-400"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await removeItem(cartId, productId);
          window.location.reload();
        });
      }}
    >
      {isPending ? "Removing..." : "Remove"}
    </button>
  );
};
