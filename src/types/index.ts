import { StaticImageData } from "next/image";

export type iProduct = {
  name: string;
  asset: StaticImageData | string;
  title: string;
  price: string;
  seller: string;
  location: string;
};

