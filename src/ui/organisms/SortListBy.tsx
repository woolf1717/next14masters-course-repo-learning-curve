"use client";

import { useRouter } from "next/navigation";

// import { useState } from "react";
// import { SortByButton } from "@/ui/atoms/SortByButton";

// import { getProductsListPagination } from "@/api/products";

export const SortListBy = async () => {
  const router = useRouter();
  return (
    <>
      <div className="m-4 p-2 pt-0 mt-0">
        <select
          className="p-2 border text-xs border-gray-300 rounded-md"
          onChange={(e) => {
            const [sortBy, order] = e.currentTarget.value.split(" ");

            router.push(`/products/1?sortBy=${sortBy}&order=${order}`);
          }}
        >
          <option value="RATING DESC" data-testid="sort-by-rating">
            Rating(High to Low)
          </option>
          <option value="RATING ASC">Rating(Low to High)</option>
          <option value="NAME DESC">Name(A to Z)</option>
          <option value="NAME ASC">Name(Z to A)</option>
          <option value="PRICE DESC" data-testid="sort-by-price">
            Price (Low to High)
          </option>
          <option value="PRICE ASC">Price (High to Low)</option>
        </select>
      </div>
    </>
  );
};
