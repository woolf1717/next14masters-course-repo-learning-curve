"use client";

import { useOptimistic } from "react";
import { AddReviewsForm } from "@/ui/molecules/AddReviewsForm";
import { Reviews, type ReviewsType } from "@/ui/molecules/Reviews";

export const ReviewsSection = ({
  productId,
  lastFiveReviews,
}: {
  productId: string;
  lastFiveReviews: ReviewsType[];
}) => {
  const [optimisticReviews, setOptimisticReviews] = useOptimistic(
    lastFiveReviews,
    (state: ReviewsType[], optimisticValue: ReviewsType): ReviewsType[] => {
      return [...state.slice(-4), { ...optimisticValue, sending: true }];
    }
  );

  return (
    <section>
      <Reviews reviews={optimisticReviews} />
      <AddReviewsForm
        productId={productId}
        setOptimisticReviews={setOptimisticReviews}
      />
    </section>
  );
};
