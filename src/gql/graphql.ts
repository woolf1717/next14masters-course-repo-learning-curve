/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
};

export type Cart = {
  id: Scalars['ID']['output'];
  items: Array<CartItem>;
};

export type CartItem = {
  product: Product;
  quantity: Scalars['Int']['output'];
};

export type CartItemInput = {
  productId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type Category = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CategoryList = {
  data: Array<Category>;
  meta: ListMeta;
};

export type Collection = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CollectionList = {
  data: Array<Collection>;
  meta: ListMeta;
};

export type ListMeta = {
  /** The total number of items matching the query */
  count: Scalars['Int']['output'];
  /** The total number of items in the database */
  total: Scalars['Int']['output'];
};

export type Mutation = {
  cartAddItem: Cart;
  cartChangeItemQuantity: Cart;
  cartComplete: Order;
  cartFindOrCreate: Cart;
  cartRemoveItem: Cart;
  reviewCreate: Cart;
};


export type MutationCartAddItemArgs = {
  id: Scalars['ID']['input'];
  input: MutationCartAddItemInput;
};


export type MutationCartChangeItemQuantityArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationCartCompleteArgs = {
  cartId: Scalars['ID']['input'];
  userEmail: Scalars['String']['input'];
};


export type MutationCartFindOrCreateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: MutationCartFindOrCreateInput;
};


export type MutationCartRemoveItemArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};


export type MutationReviewCreateArgs = {
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type MutationCartAddItemInput = {
  item: CartItemInput;
};

export type MutationCartFindOrCreateInput = {
  items?: InputMaybe<Array<CartItemInput>>;
};

export type Order = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lines: Scalars['JSON']['output'];
  status: OrderStatus;
  totalAmount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderList = {
  data: Array<Order>;
  meta: ListMeta;
};

export type OrderSortBy =
  | 'DEFAULT'
  | 'STATUS'
  | 'TOTAL';

export type OrderStatus =
  | 'CANCELLED'
  | 'CREATED'
  | 'FULFILLED'
  | 'PAID';

export type Product = {
  categories: Array<Category>;
  collections: Array<Collection>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<ProductImage>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviews: Array<Review>;
  slug: Scalars['String']['output'];
};

export type ProductImage = {
  alt: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type ProductList = {
  data: Array<Product>;
  meta: ListMeta;
};

export type ProductSortBy =
  | 'DEFAULT'
  | 'NAME'
  | 'PRICE'
  | 'RATING';

export type Query = {
  cart?: Maybe<Cart>;
  categories: CategoryList;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collections: CollectionList;
  order?: Maybe<Order>;
  orders: OrderList;
  product?: Maybe<Product>;
  products: ProductList;
};


export type QueryCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoriesArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  email: Scalars['String']['input'];
  order?: SortDirection;
  orderBy?: OrderSortBy;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  order?: SortDirection;
  orderBy?: ProductSortBy;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type Review = {
  author: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  rating: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewList = {
  data: Array<Review>;
  meta: ListMeta;
};

export type SortDirection =
  | 'ASC'
  | 'DESC';

export type CartAddProductMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type CartAddProductMutation = { cartAddItem: { id: string, items: Array<{ quantity: number, product: { id: string } }> } };

export type CartCreateMutationVariables = Exact<{ [key: string]: never; }>;


export type CartCreateMutation = { cartFindOrCreate: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, images: Array<{ url: string }> } }> } };

export type CartGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartGetByIdQuery = { cart?: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, images: Array<{ url: string }> } }> } | null };

export type CartFragment = { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, images: Array<{ url: string }> } }> };

export type CartRemoveProductMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
}>;


export type CartRemoveProductMutation = { cartRemoveItem: { id: string } };

export type CartSetProductQuantityMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type CartSetProductQuantityMutation = { cartChangeItemQuantity: { id: string } };

export type CollectionGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CollectionGetBySlugQuery = { collection?: { description: string, name: string, products: Array<{ id: string, name: string, description: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } | null };

export type CollectionsBannerFragment = { description: string, id: string, name: string, slug: string };

export type CollectionsGetBannerQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsGetBannerQuery = { collections: { data: Array<{ description: string, id: string, name: string, slug: string }> } };

export type ProductGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetByIdQuery = { product?: { id: string, name: string, description: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> } | null };

export type ProductListItemFragment = { id: string, name: string, description: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> };

export type ProductsGetByCategorySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductsGetByCategorySlugQuery = { category?: { products: Array<{ id: string, name: string, description: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } | null };

export type ProductsGetByQueryQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;


export type ProductsGetByQueryQuery = { products: { data: Array<{ id: string, name: string, description: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } };

export type ProductsGetCountQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsGetCountQuery = { products: { meta: { total: number } } };

export type ProductsGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsGetListQuery = { products: { data: Array<{ id: string, name: string, description: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } };

export type ProductsGetPaginationQueryVariables = Exact<{
  take: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
}>;


export type ProductsGetPaginationQuery = { products: { data: Array<{ id: string, name: string, description: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } };

export type ReviewCreateMutationVariables = Exact<{
  name: Scalars['String']['input'];
  content: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  headline: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
}>;


export type ReviewCreateMutation = { reviewCreate: { id: string } };

export type ReviewsFragment = { reviews: Array<{ author: string, createdAt: unknown, description: string, email: string, rating: number, title: string, id: string }> };

export type ReviewsGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ReviewsGetByIdQuery = { product?: { reviews: Array<{ author: string, createdAt: unknown, description: string, email: string, rating: number, title: string, id: string }> } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CartFragmentDoc = new TypedDocumentString(`
    fragment Cart on Cart {
  id
  items {
    quantity
    product {
      id
      name
      images {
        url
      }
      price
    }
  }
}
    `, {"fragmentName":"Cart"}) as unknown as TypedDocumentString<CartFragment, unknown>;
export const CollectionsBannerFragmentDoc = new TypedDocumentString(`
    fragment CollectionsBanner on Collection {
  description
  id
  name
  slug
}
    `, {"fragmentName":"CollectionsBanner"}) as unknown as TypedDocumentString<CollectionsBannerFragment, unknown>;
export const ProductListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductListItem on Product {
  id
  name
  description
  categories {
    name
  }
  images {
    url
  }
  price
}
    `, {"fragmentName":"ProductListItem"}) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const ReviewsFragmentDoc = new TypedDocumentString(`
    fragment Reviews on Product {
  reviews {
    author
    createdAt
    description
    email
    rating
    title
    id
  }
}
    `, {"fragmentName":"Reviews"}) as unknown as TypedDocumentString<ReviewsFragment, unknown>;
export const CartAddProductDocument = new TypedDocumentString(`
    mutation CartAddProduct($id: ID!, $productId: String!, $quantity: Int!) {
  cartAddItem(
    id: $id
    input: {item: {productId: $productId, quantity: $quantity}}
  ) {
    items {
      quantity
      product {
        id
      }
    }
    id
  }
}
    `) as unknown as TypedDocumentString<CartAddProductMutation, CartAddProductMutationVariables>;
export const CartCreateDocument = new TypedDocumentString(`
    mutation CartCreate {
  cartFindOrCreate(input: {}) {
    ...Cart
  }
}
    fragment Cart on Cart {
  id
  items {
    quantity
    product {
      id
      name
      images {
        url
      }
      price
    }
  }
}`) as unknown as TypedDocumentString<CartCreateMutation, CartCreateMutationVariables>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($id: ID!) {
  cart(id: $id) {
    id
    items {
      quantity
      product {
        id
        name
        images {
          url
        }
        price
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const CartRemoveProductDocument = new TypedDocumentString(`
    mutation CartRemoveProduct($cartId: ID!, $productId: ID!) {
  cartRemoveItem(id: $cartId, productId: $productId) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartRemoveProductMutation, CartRemoveProductMutationVariables>;
export const CartSetProductQuantityDocument = new TypedDocumentString(`
    mutation CartSetProductQuantity($id: ID!, $productId: ID!, $quantity: Int!) {
  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartSetProductQuantityMutation, CartSetProductQuantityMutationVariables>;
export const CollectionGetBySlugDocument = new TypedDocumentString(`
    query CollectionGetBySlug($slug: String!) {
  collection(slug: $slug) {
    description
    name
    products {
      id
      name
      description
      categories {
        name
      }
      images {
        url
      }
      price
    }
  }
}
    `) as unknown as TypedDocumentString<CollectionGetBySlugQuery, CollectionGetBySlugQueryVariables>;
export const CollectionsGetBannerDocument = new TypedDocumentString(`
    query CollectionsGetBanner {
  collections {
    data {
      description
      id
      name
      slug
    }
  }
}
    `) as unknown as TypedDocumentString<CollectionsGetBannerQuery, CollectionsGetBannerQueryVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($id: ID!) {
  product(id: $id) {
    id
    name
    description
    categories {
      name
    }
    images {
      url
    }
    price
  }
}
    `) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductsGetByCategorySlugDocument = new TypedDocumentString(`
    query ProductsGetByCategorySlug($slug: String!) {
  category(slug: $slug) {
    products {
      id
      name
      description
      categories {
        name
      }
      images {
        url
      }
      price
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetByCategorySlugQuery, ProductsGetByCategorySlugQueryVariables>;
export const ProductsGetByQueryDocument = new TypedDocumentString(`
    query ProductsGetByQuery($query: String!) {
  products(search: $query) {
    data {
      id
      name
      description
      categories {
        name
      }
      images {
        url
      }
      price
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetByQueryQuery, ProductsGetByQueryQueryVariables>;
export const ProductsGetCountDocument = new TypedDocumentString(`
    query ProductsGetCount {
  products {
    meta {
      total
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetCountQuery, ProductsGetCountQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList {
  products {
    data {
      id
      name
      description
      categories {
        name
      }
      images {
        url
      }
      price
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsGetPaginationDocument = new TypedDocumentString(`
    query ProductsGetPagination($take: Int!, $skip: Int!) {
  products(take: $take, skip: $skip) {
    data {
      id
      name
      description
      categories {
        name
      }
      images {
        url
      }
      price
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetPaginationQuery, ProductsGetPaginationQueryVariables>;
export const ReviewCreateDocument = new TypedDocumentString(`
    mutation ReviewCreate($name: String!, $content: String!, $email: String!, $productId: ID!, $headline: String!, $rating: Int!) {
  reviewCreate(
    author: $name
    description: $content
    email: $email
    productId: $productId
    title: $headline
    rating: $rating
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<ReviewCreateMutation, ReviewCreateMutationVariables>;
export const ReviewsGetByIdDocument = new TypedDocumentString(`
    query ReviewsGetById($id: ID!) {
  product(id: $id) {
    reviews {
      author
      createdAt
      description
      email
      rating
      title
      id
    }
  }
}
    `) as unknown as TypedDocumentString<ReviewsGetByIdQuery, ReviewsGetByIdQueryVariables>;