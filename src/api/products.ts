import {
  type ProductListItemFragment,
  ProductsGetByCategorySlugDocument,
  ProductsGetListDocument,
  ProductGetByIdDocument,
  ProductsGetPaginationDocument,
  ProductsGetCountDocument,
  ProductsGetByQueryDocument,
  type ProductSortBy,
  type SortDirection,
} from "@/gql/graphql";

import { executeGraphql } from "@/api/graphqlQuery";
import { PRODUCTS_ON_PAGE } from "@/app/constans/constans";

export const getProductsList = async () => {
  const graphqlResponse = await executeGraphql({
    query: ProductsGetListDocument,
  });

  return graphqlResponse.products.data;
};

export const getProductsByCategorySlug = async (categorySlug: string) => {
  const graphqlResponse = await executeGraphql({
    query: ProductsGetByCategorySlugDocument,
    variables: {
      slug: categorySlug,
    },
  });

  return graphqlResponse.category?.products;
};

export const getProductById = async (
  productId: ProductListItemFragment["id"]
) => {
  const graphqlResponse = await executeGraphql({
    query: ProductGetByIdDocument,
    variables: {
      id: productId,
    },
  });

  return graphqlResponse.product;
};

export const getProductsListPagination = async (
  pageNumber: number,
  orderBy?: ProductSortBy,
  order?: SortDirection,
  productsOnPage: number = PRODUCTS_ON_PAGE
): Promise<ProductListItemFragment[]> => {
  console.log("pageNumber", pageNumber);
  console.log("orderBy", orderBy);
  console.log("order", order);
  const graphqlResponse = await executeGraphql({
    query: ProductsGetPaginationDocument,
    variables: {
      skip: (pageNumber - 1) * productsOnPage,
      take: productsOnPage,
      orderBy,
      order,
    },
  });

  return graphqlResponse.products.data;
};

export const getProductsTotal = async () => {
  const graphqlResponse = await executeGraphql({
    query: ProductsGetCountDocument,
  });

  return graphqlResponse.products.meta.total;
};

export const getProductsByQuery = async (searchQuery: string) => {
  const graphqlResponse = await executeGraphql({
    query: ProductsGetByQueryDocument,
    variables: {
      query: decodeURIComponent(searchQuery),
    },
  });

  return graphqlResponse.products.data;
};
