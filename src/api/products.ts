import {
  type ProductListItemFragment,
  ProductsGetByCategorySlugDocument,
  ProductsGetListDocument,
  ProductGetByIdDocument,
  ProductsGetPaginationDocument,
} from "@/gql/graphql";

import { executeGraphql } from "@/api/graphqlQurey";

export const getProductsList = async () => {
  const graphqlResponse = await executeGraphql(ProductsGetListDocument);

  return graphqlResponse.products.data;
};

export const getProductsByCategorySlug = async (categorySlug: string) => {
  const graphqlResponse = await executeGraphql(
    ProductsGetByCategorySlugDocument,
    {
      slug: categorySlug,
    }
  );

  return graphqlResponse.category?.products;
};

export const getProductById = async (
  productId: ProductListItemFragment["id"]
) => {
  const graphqlResponse = await executeGraphql(ProductGetByIdDocument, {
    id: productId,
  });

  return graphqlResponse.product;
};

export const getProductsListPagination = async (
  pageNumber: number
): Promise<ProductListItemFragment[]> => {
  const graphqlResponse = await executeGraphql(ProductsGetPaginationDocument, {
    productsOnPage: 2,
    page: pageNumber,
  });

  return graphqlResponse.products.data;
};
