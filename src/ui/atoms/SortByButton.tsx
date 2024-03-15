"use client";

import clsx from "clsx";
import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { type ProductSortBy } from "@/gql/graphql";

export const SortByButton = ({ sortBy }: { sortBy: ProductSortBy }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createSortByQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (params.get("sortBy") === value) {
        if (params.get("order") === "DESC") {
          params.set("order", "ASC");
        } else {
          params.set("order", "DESC");
        }
      } else {
        params.set("order", "DESC");
      }
      params.set(name, value);
      return params.toString().replaceAll("+", "%20");
    },
    [searchParams]
  );
  const active = searchParams.get("sortBy") === sortBy;
  const order = searchParams.get("order");

  const handleClick = () => {
    router.push(`/products?${createSortByQueryString("sortBy", sortBy)}`);
  };

  return (
    <button
      data-testid={`sort-by-${sortBy}`}
      className={clsx(
        "px-4 py-2 m-2 bg-slate-400 rounded-xl",
        active && "bg-yellow-300"
      )}
      onClick={handleClick}
    >
      Sort by {sortBy.toLowerCase()}.
      {active && order === "ASC" && <span>↓</span>}
      {active && order === "DESC" && <span>↑</span>}
    </button>
  );
};
