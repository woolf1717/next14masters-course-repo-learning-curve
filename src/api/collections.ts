import { CollectionsGetBannerDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlQurey";

export const getCollectionsList = async () => {
  const graphqlResponse = await executeGraphql(CollectionsGetBannerDocument);

  return graphqlResponse.collections.data;
};
