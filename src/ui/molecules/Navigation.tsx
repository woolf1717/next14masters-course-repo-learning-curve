import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex h-16 max-w-full space-x-8 whitespace-nowrap lg:px-8">
        <li>
          <ActiveLink href="/">Home</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/products">All</ActiveLink>
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
