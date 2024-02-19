import { type ProductItemType } from "@/ui/types";

type ProductResponseItem = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
  longDescription: string;
};

export const getProductsList = async (): Promise<ProductItemType[]> => {
  const res = await fetch(`${process.env.GRAPHQL_URL}`, {
    method: "POST",
    body: JSON.stringify({
      query: /*GraphQL*/ `
      query GetProductsList {
        products(first: 10) {
          id
          name
          description
          images {
            url
          }
          price
        }
      }
            
      `,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  type GraphQLResponse<T> =
    | { data?: undefined; errors: { message: string }[] }
    | { data: T; errors?: undefined };

  type ProductsGraphqlResponse = {
    products: {
      id: string;
      name: string;
      desctiption: string;
      images: {
        url: string;
      }[];
      price: number;
    }[];
  };

  const graphqlResponse =
    (await res.json()) as GraphQLResponse<ProductsGraphqlResponse>;
  console.log(graphqlResponse);
  if (graphqlResponse.errors) {
    throw TypeError(graphqlResponse.errors[0].message);
  }

  return graphqlResponse.data.products.map((p) => {
    return {
      id: p.id,
      category: "",
      name: p.name,
      price: p.price,
      description: p.desctiption,
      coverImage: {
        src: p.images[0].url,
        alt: p.name,
      },
    };
  });
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products/${id}`
  );

  const productResponse = (await res.json()) as ProductResponseItem;

  return productResponseItemToProductItemType(productResponse);
};

export const getProductsListPagination = async (page: number) => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=20&offset=${page}`
  );

  const productsResponse = (await res.json()) as ProductResponseItem[];

  const products = productsResponse.map(productResponseItemToProductItemType);
  return products;
};

const productResponseItemToProductItemType = (
  product: ProductResponseItem
): ProductItemType => {
  return {
    id: product.id,
    name: product.title,
    category: product.category,
    price: product.price,
    description: product.description,
    coverImage: {
      alt: product.title,
      src: product.image,
    },
  };
};
