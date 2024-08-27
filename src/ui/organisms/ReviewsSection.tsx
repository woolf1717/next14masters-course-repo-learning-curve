"use client";

import { useOptimistic } from "react";
import { AddReviewsForm } from "@/ui/molecules/AddReviewsForm";
import { Reviews, type ReviewsType } from "@/ui/molecules/Reviews";

export const ReviewsSection = ({
  productId,
  firstFiveReviews,
  averageRating,
  reviewsCount,
}: {
  productId: string;
  firstFiveReviews: ReviewsType[];
  averageRating: number;
  reviewsCount: number;
}) => {
  const [optimisticReviews, setOptimisticReviews] = useOptimistic(
    firstFiveReviews,
    (state: ReviewsType[], optimisticValue: ReviewsType): ReviewsType[] => {
      return [...state.slice(-4), { ...optimisticValue, sending: true }];
    }
  );

  return (
    <section className="flex flex-col">
      <h1 className="text-2xl font-bold p-2 pt-4">Customers Reviews</h1>
      <h2 className="text-md p-2 pt-0">
        {averageRating.toFixed(1)}/5 acordingly to {reviewsCount} reviews
      </h2>
      <div className="pt-2 flex flex-col lg:flex-row-reverse justify-between px-4">
        <Reviews reviews={optimisticReviews} />
        <AddReviewsForm
          productId={productId}
          setOptimisticReviews={setOptimisticReviews}
        />
      </div>
    </section>
  );
};
