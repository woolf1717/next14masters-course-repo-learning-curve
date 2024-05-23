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
        "pt-1.5 hover:border-b-gray-300 border-2 px-3 border-white text-sm text-gray-500 font-bold hover:text-gray-800 h-full flex items-center",
        {
          " border-b-blue-400 hover:border-b-blue-400": isActive,
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
