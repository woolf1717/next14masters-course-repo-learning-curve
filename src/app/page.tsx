import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
  {
    id: "1",
    name: "Koszulka",
    category: "Odzież",
    price: 2500,
    coverImage: {
      src: "./product_1.jpg",
      alt: "Koszulka",
    },
  },
  {
    id: "2",
    name: "Buty",
    category: "Obuwie",
    price: 1000,
    coverImage: {
      src: "./product_2.jpg",
      alt: "Buty",
    },
  },
  {
    id: "3",
    name: "Spodnie",
    category: "Odzież",
    price: 5000,
    coverImage: {
      src: "./product_3.jpg",
      alt: "Spodnie",
    },
  },
  {
    id: "4",
    name: "Kurtka",
    category: "Odzież",
    price: 4000,
    coverImage: {
      src: "./product_4.jpg",
      alt: "Kurtka",
    },
  },
];

export default function Home() {
  return (
    <section className="mx-auto max-w-md p-12 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
      <ProductList products={products} />
    </section>
  );
}
1;
