import {
  CollectionGetBySlugDocument,
  CollectionsGetBannerDocument,
} from "@/gql/graphql";

import { executeGraphql } from "@/api/graphqlQuery";

export const getCollectionsList = async () => {
  const graphqlResponse = await executeGraphql({
    query: CollectionsGetBannerDocument,
  });

  return graphqlResponse.collections.data;
};

export const getCollectionBySlug = async ({ slug }: { slug: string }) => {
  const graphqlResponse = await executeGraphql({
    query: CollectionGetBySlugDocument,
    variables: {
      slug,
    },
  });

  return graphqlResponse.collection;
};
