import { type StaticImageData } from "next/image";
import photo_1 from "../../../public/collectionPhotos/photo_1.webp";
import photo_2 from "../../../public/collectionPhotos/photo_2.webp";
import photo_3 from "../../../public/collectionPhotos/photo_3.webp";

type BannerImagesType = {
  src: StaticImageData;
  alt: string;
};
export const bannersImages: BannerImagesType[] = [
  { src: photo_1, alt: "Summer Vibes banner image" },
  { src: photo_2, alt: "New Arrivals banner image" },
  { src: photo_3, alt: "Elegant Extras banner image" },
];
