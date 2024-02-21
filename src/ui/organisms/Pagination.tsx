"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Pagination = ({ page }: { page: number }) => {
  const router = useRouter();

  const handlePrevious = () => {
    if (page !== 1) router.push(`/products/${page - 1}`);
    else alert("You are on the first page");
  };
  const handleNext = () => {
    if (page !== 5) {
      router.push(`/products/${page + 1}`);
    } else alert("You are on the last page");
  };

  return (
    <div className="flex justify-center space-x-2" aria-label="pagination">
      <button
        className={clsx(
          "px-4 py-2 bg-gray-200 rounded-md",
          page === 1 && "bg-gray-700 cursor-auto"
        )}
        onClick={handlePrevious}
      >
        Previous
      </button>
      <ActiveLink href={"/products/1"}>1</ActiveLink>
      <ActiveLink href={"/products/2"}>2</ActiveLink>
      <ActiveLink href={"/products/3"}>3</ActiveLink>
      <ActiveLink href={"/products/4"}>4</ActiveLink>
      <ActiveLink href={"/products/5"}>5</ActiveLink>
      <button
        className={clsx(
          "px-4 py-2 bg-gray-200 rounded-md",
          page === 5 && "bg-gray-700 cursor-auto"
        )}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};
