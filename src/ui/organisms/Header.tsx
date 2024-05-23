import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { Cart } from "@/ui/molecules/Cart";
import { Navigation } from "@/ui/molecules/Navigation";
import { SearchBox } from "@/ui/molecules/SearchBox";
import { getCartFromCookies } from "@/api/cart";

export const NavBar = async () => {
  const cart = await getCartFromCookies();

  const quantity = cart?.items.length ?? 0;

  return (
    <header className="border-b bg-white bg-opacity-60 backdrop-blur-lg">
      <div className="flex mx-auto lg:space-x-4 justify-between sm:items-center max-w-7xl px-8 flex-col lg:flex-row">
        <Navigation />
        <div className="pt-8 sm:pt-0 flex flex-col sm:flex-row items-center justify-center lg:justify-end h-32 lg:h-16 px-2 w-full">
          <SearchBox />
          <div className="flex items-center h-full px-6">
            <Cart quantity={quantity} />
            <div className="pt-1.5 border-2 justify-center hover:border-b-gray-300 border-white text-sm text-gray-500 font-bold hover:text-gray-800 h-full flex items-center w-20">
              <SignedIn>
                <UserButton userProfileMode="navigation" />
              </SignedIn>
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
