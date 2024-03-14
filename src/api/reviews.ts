import { ReviewsGetByIdDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlQuery";

export const getReviewsById = async (productId: string) => {
  const graphqlResponse = await executeGraphql({
    query: ReviewsGetByIdDocument,
    variables: { id: productId },
    next: { tags: ["product"] },
  });

  return graphqlResponse;
};
