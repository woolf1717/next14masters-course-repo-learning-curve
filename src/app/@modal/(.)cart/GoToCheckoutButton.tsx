import { handlePaymentAction } from "@/api/cart";

export const GoToCheckoutButton = () => {
  return (
    <form
      action={handlePaymentAction}
      className="flex border w-full rounded-md  h-14 bg-blue-500 hover:bg-blue-600 shadow-sm mt-4  text-white"
    >
      <button type="submit" className="w-full h-full">
        Checkout
      </button>
    </form>
  );
};
