import { iFontSize, textVariant } from "@/types";
import { DM_Serif_Display, Lato } from "next/font/google";

const dm_serif_display = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

const noto_serif_normal = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});
export const fontFamily: { [key in textVariant]: string } = {
  copy: `${noto_serif_normal.className}`,
  title: `${dm_serif_display.className}`,
};

export const fontSize: iFontSize = {
  copy: {
    giant: "text-[2.5rem] leading-none",
    macro: "text-[2.25rem]",
    large: "text-[2rem]",
    big: "text-[1.75rem]",
    medium: "text-[1.5rem] leading-none",
    small: "text-[1rem] 2xl:text-[1.25rem]",
    tiny: "text-[1rem] leading-none",
    micro: "text-[0.875rem] leading-none",
  },
  title: {
    large: "text-8xl",
    big: "text-7xl",
    medium: "text-6xl leading-none",
    small: "text-5xl leading-10",
    tiny: "text-4xl leading-10",
    micro: "text-2xl",
    giant: "text-[8rem] leading-none",
    macro: "",
  },
};
