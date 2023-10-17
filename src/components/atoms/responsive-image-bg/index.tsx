"use client"

import { useResponsive } from "@/utils/hooks/useResponsive";
import Image, { StaticImageData } from "next/image";

export default function ResponsiveImage({
  desktopAsset,
  mobileAsset,
  alt,
}: {
  desktopAsset: StaticImageData;
  mobileAsset: StaticImageData;
  alt: string;
}) {
  const { isMobile } = useResponsive();
  const asset = isMobile ? mobileAsset : desktopAsset;
  return <Image fill priority src={asset} alt={alt} />;
}
