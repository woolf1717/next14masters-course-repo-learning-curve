"use client";

import { useFormStatus } from "react-dom";

export const AddToCartButton = () => {
  const formStatus = useFormStatus();

  return (
    <button
      type="submit"
      disabled={formStatus.pending}
      className="bg-slate-200 px-4 py-2 disabled:cursor-wait hover:bg-slate-500 disabled:bg-slate-300"
    >
      Add to cart
    </button>
  );
};
