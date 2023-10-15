"use client";

import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

export default function ProductGallery({
  items,
}: {
  items: Array<ReactImageGalleryItem>;
}) {
  return (
    <ImageGallery
      showPlayButton={false}
      showFullscreenButton={false}
      showNav={false}
      additionalClass="gap-x-4"
      items={items}
      thumbnailPosition="left"
    />
  );
}
