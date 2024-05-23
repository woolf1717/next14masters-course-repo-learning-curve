import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Navigation = async () => {
  return (
    <nav>
      <ul className="flex max-w-full space-x-8 whitespace-nowrap lg:px-8 h-16 sm:overflow-auto overflow-x-scroll">
        <li>
          <ActiveLink href="/">Home</ActiveLink>
        </li>
        <li>
          <ActiveLink exact={false} href="/products">
            All
          </ActiveLink>
        </li>
        <li>
          <ActiveLink exact={false} href="/categories/t-shirts">
            T-shirts
          </ActiveLink>
        </li>
        <li>
          <ActiveLink exact={false} href="/categories/hoodies">
            Hoodies
          </ActiveLink>
        </li>
        <li>
          <ActiveLink exact={false} href="/categories/accessories">
            Accessories
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
};
