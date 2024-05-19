export type ReviewsType = {
  author: string;
  createdAt: unknown;
  description: string;
  email: string;
  rating: number;
  title: string;
  id: string;
  sending?: boolean;
};

export const Reviews = ({ reviews }: { reviews: ReviewsType[] }) => {
  const dataFormater = (createdAt: string) => {
    return new Date(createdAt).toLocaleDateString() + " r.";
  };
  return (
    <div>
      {reviews.map((review) => {
        return (
          <div key={review.id} className="p-4 border-b text-sm ">
            {!review.sending && (
              <div className="">
                <p className="whitespace-nowrap">{review?.author}</p>
                <p>Rating:{review?.rating}/5</p>
                <h3 className="pt-2">{review?.title}</h3>
                <p className="italic font-light">
                  Description:{review?.description}
                </p>
                <div className="flex justify-end">
                  <p className="text-xs p-2">
                    Coment from: {dataFormater(String(review?.createdAt))}
                  </p>
                </div>
              </div>
            )}
            {review.sending && <p>Wysyłanie opinii</p>}
          </div>
        );
      })}
    </div>
  );
};
