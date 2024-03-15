import clsx from "clsx";

export const SortByButton = ({
  sortBy,
  active,
}: {
  sortBy: "price" | "rating" | "random";
  active?: boolean;
}) => {
  return (
    <button
      data-testid={`sort-by-${sortBy}`}
      className={clsx(
        "px-4 py-2 m-2 bg-slate-400 rounded-xl",
        active && "bg-yellow-300"
      )}
    >
      Sort by {sortBy}
    </button>
  );
};
