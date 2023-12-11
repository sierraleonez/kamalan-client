import React from "react";
import { DM_Serif_Display, Lato } from 'next/font/google'
import { mergeClass } from "@/utils/styling/tw-merge";


const dm_serif_display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const noto_serif_normal = Lato({ subsets: ["latin"], weight: ['400', '700', '900'] })


type textVariant = "copy" | "title"
type textSize = "giant" | "macro"| "large" | "big" | "small" | "tiny" | "medium" | "micro"

type iFontSize = { [key in textVariant]: { [key in textSize]: string }  }

const fontSize: iFontSize = {
  copy: {
    giant: "text-[2.5rem]",
    macro: "text-[2.25rem]",
    large: "text-[2rem]",
    big: "text-[1.75rem]",
    medium: "text-[1.5rem]",
    small: "text-[1.25rem]",
    tiny: "text-[1rem]",
    micro: "text-[0.75rem]",
  },
  title: {
    large: "text-[6rem]",
    big: "text-[5rem]",
    medium: "text-[4rem]",
    small: "text-[3rem] leading-10",
    tiny: "text-[2rem]",
    micro: "text-[1.5rem]",
    giant: "",
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