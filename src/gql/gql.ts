/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CollectionGetBySlug($slug: String!) {\n  collection(slug: $slug) {\n    description\n    name\n    products {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n    }\n  }\n}": types.CollectionGetBySlugDocument,
    "fragment CollectionsBanner on Collection {\n  description\n  id\n  name\n  slug\n}": types.CollectionsBannerFragmentDoc,
    "query CollectionsGetBanner {\n  collections {\n    data {\n      description\n      id\n      name\n      slug\n    }\n  }\n}": types.CollectionsGetBannerDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    description\n    categories {\n      name\n    }\n    images {\n      url\n    }\n    price\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories {\n    name\n  }\n  images {\n    url\n  }\n  price\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetList {\n  products {\n    data {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetPagination($productsOnPage: Int!, $page: Int!) {\n  products(take: $productsOnPage, skip: $page) {\n    data {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n    }\n  }\n}": types.ProductsGetPaginationDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetBySlug($slug: String!) {\n  collection(slug: $slug) {\n    description\n    name\n    products {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n    }\n  }\n}"): typeof import('./graphql').CollectionGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionsBanner on Collection {\n  description\n  id\n  name\n  slug\n}"): typeof import('./graphql').CollectionsBannerFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetBanner {\n  collections {\n    data {\n      description\n      id\n      name\n      slug\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetBannerDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    description\n    categories {\n      name\n    }\n    images {\n      url\n    }\n    price\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories {\n    name\n  }\n  images {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products {\n    data {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetPagination($productsOnPage: Int!, $page: Int!) {\n  products(take: $productsOnPage, skip: $page) {\n    data {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n    }\n  }\n}"): typeof import('./graphql').ProductsGetPaginationDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
