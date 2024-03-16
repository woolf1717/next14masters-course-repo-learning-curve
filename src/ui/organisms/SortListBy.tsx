"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";

// import { useState } from "react";
// import { SortByButton } from "@/ui/atoms/SortByButton";

// import { getProductsListPagination } from "@/api/products";

export const SortListBy = async () => {
  const router = useRouter();
  // const [visible, setVisible] = useState(false);
  // const products = await getProductsListPagination(1, "DEFAULT", "ASC");
  return (
    <>
      {/* <p>{JSON.stringify(products)}</p> */}
      <div className={clsx("flex justify-end m-4 p-2")}>
        <select
          className="p-2"
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

        {/* <button
          className="px-4 py-2 m-2 bg-slate-400 rounded-xl"
          onClick={() => setVisible(!visible)}
        >
          Sort by
        </button>

        <SortByButton sortBy="PRICE" visible={visible} />
        <SortByButton sortBy="RATING" visible={visible} /> */}
      </div>
    </>
  );
};
