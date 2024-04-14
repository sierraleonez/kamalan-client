import { iProductImage } from "@/lib/services/type";

export const DUMMY_PRODUCT_GALLERY = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    thumbnailHeight: 175,
    thumbnailWidth: 140,
    variant: "a",
    thumbnailClass: "w-fit h-fit",
    originalHeight: 760,
    originalWidth: 600,
    
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    thumbnailHeight: 175,
    thumbnailWidth: 140,
    variant: "b",
    originalHeight: 760,
    originalWidth: 600,
    thumbnailClass: "w-fit h-fit",
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    thumbnailHeight: 175,
    thumbnailWidth: 140,
    variant: "c",
    originalHeight: 760,
    originalWidth: 600,
    thumbnailClass: "w-fit h-fit",
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    thumbnailHeight: 175,
    thumbnailWidth: 140,
    variant: "d",
    originalHeight: 760,
    originalWidth: 600,
    thumbnailClass: "w-fit h-fit",
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    thumbnailHeight: 175,
    thumbnailWidth: 140,
    variant: "e",
    originalHeight: 760,
    originalWidth: 600,
    thumbnailClass: "w-fit h-fit",
  },
  // {
  //   original: "https://dummyimage.com/608x760/000/fff",
  //   thumbnail: "https://dummyimage.com/140x175/000/fff",
  //   thumbnailHeight: 175,
  //   thumbnailWidth: 140,
  //   originalHeight: 760,
  //   originalWidth: 600,
  //   thumbnailClass: "w-fit h-fit",
  // },
];

export const createImageGallerySource = (images: Array<iProductImage>) => {
  return images.map((image) => ({
    original: image.asset_url,
    thumbnail: image.asset_url,
    thumbnailHeight: 175,
    thumbnailWidth: 140,
    variant: image.product_variation_id,
    thumbnailClass: "w-fit h-fit",
    originalHeight: 200,
    originalWidth: 300,
  }))
}
