import React from "react";
import { mergeClass } from "@/utils/styling/tw-merge";
import { textSize, textVariant } from "@/types";
import { fontFamily, fontSize } from "@/style/text";

export default function Text({
  children,
  variant = "copy",
  size = "tiny",
  className = "",
}: {
  children: React.ReactNode;
  variant?: textVariant;
  size?: textSize;
  className?: string;
}) {
  const mergedClass = mergeClass(
    fontFamily[variant],
    fontSize[variant][size],
    className
  );
  return <p className={mergedClass}>{children}</p>;
}
