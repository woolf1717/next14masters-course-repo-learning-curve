import {
  type ProductListItemFragment,
  ProductsGetByCategorySlugDocument,
  ProductsGetListDocument,
  ProductGetByIdDocument,
  ProductsGetPaginationDocument,
  ProductsGetCountDocument,
  ProductsGetByQueryDocument,
} from "@/gql/graphql";

import { executeGraphql } from "@/api/graphqlQurey";
import { PRODUCTS_ON_PAGE } from "@/app/constans/constans";

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
  pageNumber: number,
  productsOnPage: number = PRODUCTS_ON_PAGE
): Promise<ProductListItemFragment[]> => {
  const graphqlResponse = await executeGraphql(ProductsGetPaginationDocument, {
    skip: (pageNumber - 1) * productsOnPage,
    take: productsOnPage,
  });

  return graphqlResponse.products.data;
};

export const getProductsTotal = async () => {
  const graphqlResponse = await executeGraphql(ProductsGetCountDocument);

  return graphqlResponse.products.meta.total;
};

export const getProductsByQuery = async (query: string) => {
  const graphqlResponse = await executeGraphql(ProductsGetByQueryDocument, {
    query: decodeURIComponent(query),
  });

  return graphqlResponse.products.data;
};
