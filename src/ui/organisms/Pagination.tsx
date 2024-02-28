"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { PRODUCTS_ON_PAGE } from "@/app/constans/constans";

export const Pagination = async ({
  page,
  productsTotal,
}: {
  page: number;
  productsTotal: number;
}) => {
  const router = useRouter();
  const pagesCount = Math.ceil(productsTotal / PRODUCTS_ON_PAGE);

  const handlePrevious = () => {
    if (page !== 1) router.push(`/products/${page - 1}`);
    else alert("You are on the first page");
  };
  const handleNext = () => {
    if (page !== pagesCount) {
      router.push(`/products/${page + 1}`);
    } else alert("You are on the last page");
  };

  const activeLinks = () => {
    const links = [];

    for (let i = 1; i <= pagesCount; i++) {
      links.push(
        <ActiveLink href={`/products/${i}`} key={i}>
          {i}
        </ActiveLink>
      );
    }

    return links;
  };

  return (
    <div className="pt-6 flex justify-center space-x-2" aria-label="pagination">
      <button
        className={clsx(
          "px-4 py-2 bg-gray-200 rounded-md",
          page === 1 && "bg-gray-700 cursor-auto"
        )}
        onClick={handlePrevious}
      >
        Previous
      </button>

      {activeLinks()}

      <button
        className={clsx(
          "px-4 py-2 bg-gray-200 rounded-md",
          page >= pagesCount && "bg-gray-700 cursor-auto"
        )}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};
