import NextImage from "next/image";
import { GoToCheckoutButton } from "@/app/@modal/(.)cart/GoToCheckoutButton";
import { Modal } from "@/app/@modal/(.)cart/modal";
import { formatMoney } from "@/utils";
import { getCartFromCookies } from "@/api/cart";

export default async function CartPage() {
  const cart = await getCartFromCookies();

  return (
    <Modal>
      <div className="flex flex-col justify-between items-baseline w-full h-full">
        <div className="flex flex-col p-8 w-full">
          <div className="flex w-full justify-between">
            <h1>Shopping cart </h1>
            <a href={"/cart"}>
              <span className="text-blue-500 hover:text-blue-700 text-sm">
                (open full view)
              </span>
            </a>
          </div>

          <ul className="pt-2">
            {cart &&
              cart.items.map((item) => (
                <li key={item.product.id}>
                  <div className="flex flex-row justify-between py-4">
                    <div className="flex flex-row">
                      {item.product.images[0] && (
                        <NextImage
                          src={item.product.images[0].url}
                          alt="image-alt"
                          width={100}
                          height={100}
                          className="border p-1"
                        />
                      )}

                      <div className="flex flex-col  justify-around pl-4">
                        <div>
                          <div>{item.product.name}</div>
                          <div className="opacity-80  font-light pt-0.5">
                            {item.product.categories[0] &&
                              item.product.categories[0].name}
                          </div>
                        </div>
                        <div className="opacity-80 text-sm">
                          Quantity: {item.quantity}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="p-4">
                        {formatMoney(
                          (item.product.price * item.quantity) / 100
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        <div className="border-t px-8 py-6 w-full">
          <div className="flex  justify-between items-center">
            <div>
              <h3>Total</h3>
              <p className="opacity-70 text-sm">
                Shipping and taxes will be added at the next step
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
          <GoToCheckoutButton />
        </div>
      </div>
    </Modal>
  );
}
