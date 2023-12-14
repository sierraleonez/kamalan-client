import React from "react";
import { DM_Serif_Display, Lato } from 'next/font/google'
import { mergeClass } from "@/utils/styling/tw-merge";


const dm_serif_display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const noto_serif_normal = Lato({ subsets: ["latin"], weight: ['300', '400', '700', '900'] })


type textVariant = "copy" | "title"
type textSize = "giant" | "macro"| "large" | "big" | "small" | "tiny" | "medium" | "micro"

type iFontSize = { [key in textVariant]: { [key in textSize]: string }  }

const fontSize: iFontSize = {
  copy: {
    giant: "text-[2.5rem] leading-none",
    macro: "text-[2.25rem]",
    large: "text-[2rem]",
    big: "text-[1.75rem]",
    medium: "text-[1.5rem] leading-none",
    small: "text-[1.25rem]",
    tiny: "text-[1rem] leading-none",
    micro: "text-[0.875rem] leading-none",
  },
  title: {
    large: "text-[6rem]",
    big: "text-[5rem]",
    medium: "text-[4rem] leading-none",
    small: "text-[3rem] leading-10",
    tiny: "text-[2rem]",
    micro: "text-[1.5rem]",
    giant: "text-[8rem] leading-none",
    macro: ""
  },
}

const fontFamily: { [key in textVariant]: string } = {
  copy: `${noto_serif_normal.className}`,
  title: `${dm_serif_display.className}`
}

export default function Text({ children, variant, size, className = "" }: { children: React.ReactNode, variant: textVariant, size: textSize, className?: string }) {
  const mergedClass = mergeClass(fontFamily[variant], fontSize[variant][size], className)
  return (
    <p className={mergedClass}>
      {children}
    </p>
  )
}