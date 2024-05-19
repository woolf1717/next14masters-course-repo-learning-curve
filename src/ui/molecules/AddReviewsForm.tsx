import { useRef } from "react";
import { sendReview } from "@/serverActions";
import { type ReviewsType } from "@/ui/molecules/Reviews";

export type RowFormDataType = {
  name: string;
  content: string;
  email: string;
  productId: string;
  headline: string;
  rating: number;
};
export const AddReviewsForm = ({
  productId,
  setOptimisticReviews,
}: {
  productId: string;
  setOptimisticReviews: (action: ReviewsType) => void;
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormAction = async (formData: FormData) => {
    const rowFormData: RowFormDataType = {
      name: formData.get("name") as string,
      content: formData.get("content") as string,
      email: formData.get("email") as string,
      productId: productId,
      headline: formData.get("headline") as string,
      rating: parseInt(formData.get("rating") as string),
    };

    const optimisticRowFormData: ReviewsType = {
      author: "fakeAuthor",
      createdAt: "fakeDate",
      description: "fakeDescription",
      email: "fakeEmail",
      rating: rowFormData.rating,
      title: "fakeTitle",
      id: "fakeId",
    };

    setOptimisticReviews(optimisticRowFormData);
    formRef.current?.reset();
    await sendReview(rowFormData);
  };
  return (
    <div className="max-w-screen-sm min-w-96">
      <h2 className="text-xl pt-2 p-2">Share your thoughts</h2>
      <p className="text-sm pt-1 p-2">
        If you have used this product, share your thoughts with other customers
      </p>
      <form
        action={handleFormAction}
        data-testid="add-review-form"
        ref={formRef}
      >
        <div className="p-2 flex flex-col items-start justify-around">
          <label htmlFor="headline" className="text-xs">
            Review title
          </label>
          <input
            type="text"
            id="headline"
            name="headline"
            minLength={2}
            className="border border-zinc-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="p-2 flex flex-col items-start justify-around">
          <label htmlFor="content" className="text-xs">
            Review content
          </label>
          <textarea
            className="border border-zinc-300 rounded-md p-2  w-full"
            id="content"
            name="content"
            minLength={2}
            required
          />
        </div>
        <div className="p-2 flex flex-col items-start  justify-around">
          <label htmlFor="rating" className="text-xs">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            min={1}
            max={5}
            className="border border-zinc-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="p-2 flex flex-col items-start  justify-around">
          <label htmlFor="name" className="text-xs">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-zinc-300 rounded-md p-2 w-full"
            minLength={2}
            required
          />
        </div>
        <div className="p-2 flex flex-col items-start  justify-around">
          <label htmlFor="email" className="text-xs">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-zinc-300 rounded-md p-2 w-full"
            minLength={2}
            required
          />
        </div>
        <div className="invisible">
          <input
            type="text"
            className="border border-zinc-300 rounded-md p-2"
            value={productId}
            name="productId"
            readOnly
          />
        </div>
        <div className="p-2 flex flex-col items-start  justify-end ">
          <button
            type="submit"
            className="bg-gray-900 px-4 py-2 rounded-md text-white"
          >
            Submit review
          </button>
        </div>
      </form>
    </div>
  );
};
