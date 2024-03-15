import { SortByButton } from "@/ui/atoms/SortByButton";

export const SortListBy = ({}: {}) => {
  return (
    <>
      <div className="flex justify-end">
        <SortByButton sortBy="random" active={true} />
        <SortByButton sortBy="price" />
        <SortByButton sortBy="rating" />
      </div>
    </>
  );
};
