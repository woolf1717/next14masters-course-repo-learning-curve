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
    "mutation CartAddProduct($id: ID!, $productId: String!, $quantity: Int!) {\n  cartAddItem(\n    id: $id\n    input: {item: {productId: $productId, quantity: $quantity}}\n  ) {\n    items {\n      quantity\n      product {\n        id\n      }\n    }\n    id\n  }\n}": types.CartAddProductDocument,
    "mutation CartCreate {\n  cartFindOrCreate(input: {}) {\n    ...Cart\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n        images {\n          url\n        }\n        price\n      }\n    }\n  }\n}": types.CartGetByIdDocument,
    "fragment Cart on Cart {\n  id\n  items {\n    quantity\n    product {\n      id\n      name\n      images {\n        url\n      }\n      price\n    }\n  }\n}": types.CartFragmentDoc,
    "mutation CartRemoveProduct($cartId: ID!, $productId: ID!) {\n  cartRemoveItem(id: $cartId, productId: $productId) {\n    id\n  }\n}": types.CartRemoveProductDocument,
    "mutation CartSetProductQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    id\n  }\n}": types.CartSetProductQuantityDocument,
    "query CollectionGetBySlug($slug: String!) {\n  collection(slug: $slug) {\n    description\n    name\n    products {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n    }\n  }\n}": types.CollectionGetBySlugDocument,
    "fragment CollectionsBanner on Collection {\n  description\n  id\n  name\n  slug\n}": types.CollectionsBannerFragmentDoc,
    "query CollectionsGetBanner {\n  collections {\n    data {\n      description\n      id\n      name\n      slug\n    }\n  }\n}": types.CollectionsGetBannerDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  rating\n  categories {\n    name\n  }\n  images {\n    url\n  }\n  price\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByQuery($query: String!) {\n  products(search: $query) {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByQueryDocument,
    "query ProductsGetCount {\n  products {\n    meta {\n      total\n    }\n  }\n}": types.ProductsGetCountDocument,
    "query ProductsGetList {\n  products {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetPagination($take: Int!, $skip: Int!) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetPaginationDocument,
    "mutation ReviewCreate($name: String!, $content: String!, $email: String!, $productId: ID!, $headline: String!, $rating: Int!) {\n  reviewCreate(\n    author: $name\n    description: $content\n    email: $email\n    productId: $productId\n    title: $headline\n    rating: $rating\n  ) {\n    id\n  }\n}": types.ReviewCreateDocument,
    "fragment Reviews on Product {\n  reviews {\n    author\n    createdAt\n    description\n    email\n    rating\n    title\n    id\n  }\n}": types.ReviewsFragmentDoc,
    "query ReviewsGetById($id: ID!) {\n  product(id: $id) {\n    reviews {\n      author\n      createdAt\n      description\n      email\n      rating\n      title\n      id\n    }\n  }\n}": types.ReviewsGetByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($id: ID!, $productId: String!, $quantity: Int!) {\n  cartAddItem(\n    id: $id\n    input: {item: {productId: $productId, quantity: $quantity}}\n  ) {\n    items {\n      quantity\n      product {\n        id\n      }\n    }\n    id\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  cartFindOrCreate(input: {}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n        images {\n          url\n        }\n        price\n      }\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Cart {\n  id\n  items {\n    quantity\n    product {\n      id\n      name\n      images {\n        url\n      }\n      price\n    }\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveProduct($cartId: ID!, $productId: ID!) {\n  cartRemoveItem(id: $cartId, productId: $productId) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetProductQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    id\n  }\n}"): typeof import('./graphql').CartSetProductQuantityDocument;
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
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  rating\n  categories {\n    name\n  }\n  images {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByQuery($query: String!) {\n  products(search: $query) {\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetCount {\n  products {\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsGetCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products {\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetPagination($take: Int!, $skip: Int!) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetPaginationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($name: String!, $content: String!, $email: String!, $productId: ID!, $headline: String!, $rating: Int!) {\n  reviewCreate(\n    author: $name\n    description: $content\n    email: $email\n    productId: $productId\n    title: $headline\n    rating: $rating\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Reviews on Product {\n  reviews {\n    author\n    createdAt\n    description\n    email\n    rating\n    title\n    id\n  }\n}"): typeof import('./graphql').ReviewsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewsGetById($id: ID!) {\n  product(id: $id) {\n    reviews {\n      author\n      createdAt\n      description\n      email\n      rating\n      title\n      id\n    }\n  }\n}"): typeof import('./graphql').ReviewsGetByIdDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
