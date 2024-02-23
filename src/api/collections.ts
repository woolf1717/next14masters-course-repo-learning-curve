import {
  CollectionGetBySlugDocument,
  CollectionsGetBannerDocument,
} from "@/gql/graphql";

import { executeGraphql } from "@/api/graphqlQurey";

export const getCollectionsList = async () => {
  const graphqlResponse = await executeGraphql(CollectionsGetBannerDocument);

  return graphqlResponse.collections.data;
};

export const getCollectionBySlug = async ({ slug }: { slug: string }) => {
  const graphqlResponse = await executeGraphql(CollectionGetBySlugDocument, {
    slug,
  });

  return graphqlResponse.collection;
};
