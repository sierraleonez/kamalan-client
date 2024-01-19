"use client";

import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

export default function ProductGallery({
  items,
  thumbnailPosition = "left",
}: {
  items: Array<ReactImageGalleryItem>;
  thumbnailPosition?: "top" | "right" | "bottom" | "left";
}) {
  return (
    <ImageGallery
      useBrowserFullscreen={false}
      showPlayButton={false}
      // showThumbnails={false}
      showFullscreenButton={false}
      showNav={false}
      additionalClass="gap-x-4"
      items={items}
      thumbnailPosition={thumbnailPosition}
    />
  );
}
