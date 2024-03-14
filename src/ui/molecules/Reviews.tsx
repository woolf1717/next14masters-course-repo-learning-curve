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
  return (
    <>
      {reviews.map((review) => {
        return (
          <div key={review.id} className="p-4 border border-orange-400">
            {!review.sending && (
              <>
                <h3>Review Title:{review?.title}</h3>
                <p>Rating:{review?.rating}</p>
                <p>Author:{review?.author}</p>
                <p>Creation data:{String(review?.createdAt)}</p>
                <p>Email:{review?.email}</p>
                <p>Description:{review?.description}</p>
              </>
            )}
            {review.sending && <p>Wysyłanie opinii</p>}
          </div>
        );
      })}
    </>
  );
};
