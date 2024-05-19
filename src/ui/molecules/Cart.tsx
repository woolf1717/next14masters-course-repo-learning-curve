import Link from "next/link";
import { ShopingBag } from "@/svg/ShopingBag";
import { getCartFromCookies } from "@/api/cart";

export const Cart = async () => {
  const cart = await getCartFromCookies();

  const quantity = cart?.items.length ?? 0;
  return (
    <div className="border-2 hover:border-b-gray-300  border-white text-sm text-gray-500 font-bold hover:text-gray-800 h-full">
      <Link href="/cart" className=" flex items-center h-full">
        <div className="px-0.5">
          <ShopingBag className="w-6 h-6  dark:text-white" />
        </div>
        <div className=" pt-1.5 px-1">{quantity}</div>
      </Link>
    </div>
  );
};
