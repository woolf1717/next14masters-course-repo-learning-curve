"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShopingBag } from "@/svg/ShopingBag";

export const Cart = ({ quantity }: { quantity: number }) => {
  const currentPathname = usePathname();

  const href = "/cart";

  const isActive = currentPathname === href;
  if (!isActive) {
    return (
      <div className="border-2 hover:border-b-gray-300  border-white text-sm text-gray-500 font-bold hover:text-gray-800 h-full">
        <Link href="/cart" scroll={false} className="flex items-center h-full">
          <div className="px-0.5">
            <ShopingBag className="w-6 h-6  dark:text-white" />
          </div>
          <div className=" pt-1.5 px-1">{quantity}</div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="border-2 border-b-blue-400  border-white text-sm text-gray-500 font-bold hover:text-gray-800 h-full">
        <div className="flex items-center h-full">
          <div className="px-0.5">
            <ShopingBag className="w-6 h-6  dark:text-white" />
          </div>
          <div className=" pt-1.5 px-1">{quantity}</div>
        </div>
      </div>
    );
  }
};
