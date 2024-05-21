"use client";

import { useOptimistic } from "react";
import { changeItemQuantity } from "@/serverActions";

export const ChangeProductQuantity = ({
  cartId,
  productId,
  quantity,
}: {
  cartId: string;
  productId: string;
  quantity: number;
}) => {
  const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
    quantity,
    (quantity: number, action: "ADD" | "REMOVE") => {
      if (action === "ADD") {
        return quantity + 1;
      } else {
        return quantity - 1;
      }
    }
  );

  return (
    <form>
      <button
        className="border bg-slate-50 w-8 h-8"
        data-testid="decrement"
        formAction={async () => {
          if (optimisticQuantity <= 1) {
            return;
          }
          setOptimisticQuantity("REMOVE");
          await changeItemQuantity(cartId, productId, optimisticQuantity - 1);
        }}
      >
        -
      </button>
      <span data-testid="quantity" className="px-3">
        {optimisticQuantity}
      </span>
      <button
        className="border bg-slate-50 w-8 h-8"
        data-testid="increment"
        formAction={async () => {
          setOptimisticQuantity("ADD");
          await changeItemQuantity(cartId, productId, optimisticQuantity + 1);
        }}
      >
        +
      </button>
    </form>
  );
};
