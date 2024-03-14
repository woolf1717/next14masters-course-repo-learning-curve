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
    <div className="max-w-screen-sm">
      <form
        action={handleFormAction}
        data-testid="add-review-form"
        ref={formRef}
      >
        <div className="p-2 flex row items-center justify-around">
          <label htmlFor="headline">Tytuł opinii</label>
          <input
            type="text"
            id="headline"
            name="headline"
            minLength={2}
            required
          />
        </div>
        <div className="p-2 flex row items-center justify-around">
          <label htmlFor="content">Opinia</label>
          <textarea id="content" name="content" minLength={2} required />
        </div>
        <div className="p-2 flex row items-center justify-around">
          <label htmlFor="rating">Ocena</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min={1}
            max={5}
            required
          />
        </div>
        <div className="p-2 flex row items-center justify-around">
          <label htmlFor="name">Imię</label>
          <input type="text" id="name" name="name" minLength={2} required />
        </div>
        <div className="p-2 flex row items-center justify-around">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" minLength={2} required />
        </div>
        <div className="invisible">
          <input type="text" value={productId} name="productId" readOnly />
        </div>
        <div className="p-2 flex row items-center justify-end ">
          <button type="submit" className="bg-slate-600 px-4 py-2 rounded-xl">
            Wyślij opinię
          </button>
        </div>
      </form>
    </div>
  );
};
