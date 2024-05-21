import Link from "next/link";
import NextImage from "next/image";
import { redirect } from "next/navigation";
import { getCartFromCookies, handlePaymentAction } from "@/api/cart";

import { ChangeProductQuantity } from "@/ui/atoms/IncrementProductQuantity";
import { RemoveButton } from "@/ui/atoms/RemoveButton";
import { formatMoney } from "@/utils";

export default async function CartPage() {
  const cart = await getCartFromCookies();

  if (!cart) {
    redirect("/");
  }

  return (
    <>
      <h1 className="pt-10 text-3xl font-bold">Your Shopping Cart</h1>
      <div className="w-full flex-col flex justify-center pt-16">
        <ul>
          {cart &&
            cart.items.map((item) => (
              <li key={item.product.id} className="px-2">
                <div className="flex flex-row justify-between border-t py-4">
                  <div className="flex flex-row">
                    {item.product.images[0] && (
                      <NextImage
                        src={item.product.images[0].url}
                        alt="image-alt"
                        width={140}
                        height={140}
                        className="border p-4"
                      />
                    )}

                    <div className="flex flex-col  justify-around pl-4">
                      <div>
                        <div>{item.product.name}</div>
                        <div className="opacity-80 pt-0.5">
                          {item.product.categories[0] &&
                            item.product.categories[0].name}
                        </div>
                      </div>
                      <div>
                        {cart && (
                          <ChangeProductQuantity
                            quantity={item.quantity}
                            cartId={cart.id}
                            productId={item.product.id}
                          />
                        )}
                        <div className="pt-2">
                          <RemoveButton
                            cartId={cart.id}
                            productId={item.product.id}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="p-4">
                      {formatMoney((item.product.price * item.quantity) / 100)}
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="flex w-full justify-between items-center px-10 py-10 border-t">
        <div>
          <h2>Order total </h2>
          <p className="opacity-70">
            Shipping and taxes will be calculated at the next step
          </p>
        </div>
        <div>
          {cart &&
            formatMoney(
              cart.items.reduce(
                (acc, item) => acc + item.product.price * item.quantity,
                0
              ) / 100
            )}
        </div>
      </div>
      <div className="flex justify-end ">
        <form
          action={handlePaymentAction}
          className="flex border w-1/2 rounded-md  h-14 bg-blue-500 hover:bg-blue-600 shadow-sm mt-4  text-white"
        >
          <button type="submit" className="w-full h-full">
            Pay
          </button>
        </form>
      </div>
      <div className="flex flex-row justify-center pt-8">
        <Link href="/">
          <span className=" text-blue-500 hover:text-blue-700">
            Continue shopping
          </span>
        </Link>
      </div>
    </>
  );
}
