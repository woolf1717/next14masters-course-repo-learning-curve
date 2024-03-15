import { SortByButton } from "@/ui/atoms/SortByButton";

export const SortListBy = () => {
  return (
    <>
      <div className="flex justify-end">
        <SortByButton sortBy="DEFAULT" />
        <SortByButton sortBy="PRICE" />
        <SortByButton sortBy="RATING" />
      </div>
    </>
  );
};
