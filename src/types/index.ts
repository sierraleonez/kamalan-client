import { StaticImageData } from "next/image";

export type textVariant = "copy" | "title";
export type textSize =
  | "giant"
  | "macro"
  | "large"
  | "big"
  | "small"
  | "tiny"
  | "medium"
  | "micro";

export type iFontSize = { [key in textVariant]: { [key in textSize]: string } };

export type iProduct = {
  name: string;
  asset: StaticImageData | string;
  title: string;
  price: string;
  seller: string;
  location: string;
};

