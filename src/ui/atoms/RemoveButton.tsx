"use client";

import { useRouter } from "next/navigation";
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
  const router = useRouter();

  return (
    <button
      className="text-blue-500 disabled:text-gray-400"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await removeItem(cartId, productId);
          router.refresh();
        });
      }}
    >
      {isPending ? "Removing..." : "Remove"}
    </button>
  );
};
