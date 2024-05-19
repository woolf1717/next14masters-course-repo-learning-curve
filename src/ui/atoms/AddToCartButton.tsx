"use client";

import { useFormStatus } from "react-dom";

export const AddToCartButton = () => {
  const formStatus = useFormStatus();

  return (
    <button
      type="submit"
      disabled={formStatus.pending}
      data-testid="add-to-cart-button"
      className="bg-slate-200 px-4 py-2 disabled:cursor-wait hover:bg-slate-500 disabled:bg-slate-300 w-full h-16 text-white bg-gradient-to-r from-indigo-800 to-fuchsia-800 rounded-lg"
    >
      Add to cart
    </button>
  );
};
