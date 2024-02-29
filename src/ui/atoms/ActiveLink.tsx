"use client";

import Link from "next/link";
import { type Route } from "next";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type ActiveLinkProps<Href extends string> = {
  activeClassName?: string;
  className?: string;
  exact?: boolean;
  children: React.ReactNode;
  href: Route<Href>;
};

export const ActiveLink = <Href extends string>({
  children,
  href,
  exact = true,
  className,
  activeClassName,
}: ActiveLinkProps<Href>) => {
  const currentPathname = usePathname();

  const isActive = exact
    ? currentPathname === href
    : currentPathname.startsWith(href) &&
      (currentPathname[href.length] === "/" ||
        currentPathname.length === href.length);

  return (
    <Link
      href={href}
      className={clsx(
        "text-blue-400 hover:text-blue-600",
        {
          " border-b-2 border-b-blue-400": isActive,
        },
        className,
        activeClassName && isActive
      )}
      aria-current={isActive ? true : undefined}
    >
      {children}
    </Link>
  );
};
