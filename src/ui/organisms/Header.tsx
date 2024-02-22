import { Cart } from "@/ui/molecules/Cart";
import { Navigation } from "@/ui/molecules/Navigation";
import { SearchBox } from "@/ui/molecules/SearchBox";
import { SignIn } from "@/ui/molecules/SignIn";

export const Header = () => {
  return (
    <header className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <div className="flex mt-4 space-x-4 justify-around">
        <Navigation />
        <div className="flex space-x-4">
          <SearchBox />
          <Cart />
          <SignIn />
        </div>
      </div>
    </header>
  );
};
