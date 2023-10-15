import ProductGallery from "@/components/molecules/product-gallery";
import { Box, Button, ButtonBase, Typography } from "@mui/material";
import { Parser } from "html-to-react";

import "react-image-gallery/styles/css/image-gallery.css";

import ProductCart from "@/components/molecules/cart";

import location_icon from "assets/utility/location.svg";
import Image from "next/image";
import CButton from "@/components/atoms/button";

const text = `
<div>
<p>Lorem ipsum dolor <strong>sit amet</strong>, <i>consectetur</i> <u>adipisicing</u> elit. Neque, tempora similique. Eius debitis incidunt praesentium officia ipsam adipisci deserunt voluptates neque esse commodi eveniet, natus quidem a molestiae ipsum repudiandae!</p>
<ol>
  <li>Informasi Relevan 1</li>
  <li>Informasi Relevan 2</li>
  <li>Informasi Relevan 3</li>
</ol>
<p>end of paragraph</p>
</div>
`;

export default function ProductDetail() {
  const parse = Parser();

  return (
    <Box className="grid grid-cols-6 gap-x-5 pb-10">
      <Box className="col-span-3">
        <ProductGallery
          items={[
            {
              original: "https://dummyimage.com/608x760/000/fff",
              thumbnail: "https://dummyimage.com/140x175/000/fff",
              thumbnailHeight: 175,
              thumbnailWidth: 140,
              thumbnailClass: "w-fit h-fit",
              originalHeight: 760,
              originalWidth: 600,
            },
            {
              original: "https://dummyimage.com/608x760/000/fff",
              thumbnail: "https://dummyimage.com/140x175/000/fff",
              thumbnailHeight: 175,
              thumbnailWidth: 140,
              originalHeight: 760,
              originalWidth: 600,
              thumbnailClass: "w-fit h-fit",
            },
            {
              original: "https://dummyimage.com/608x760/000/fff",
              thumbnail: "https://dummyimage.com/140x175/000/fff",
              thumbnailHeight: 175,
              thumbnailWidth: 140,
              originalHeight: 760,
              originalWidth: 600,
              thumbnailClass: "w-fit h-fit",
            },
          ]}
        />
      </Box>
      <Box className="flex flex-col gap-y-4 col-span-2">
        <Typography variant="h4">
          Nusantara Foliage Motive Tablewares
        </Typography>
        <Typography
          variant="h6"
          fontFamily={"sans-serif"}
          className="flex items-center gap-x-2"
        >
          Dibuat oleh Sepiring{" "}
          <Box className="inline-block w-5 h-[2px] bg-gula" />
          <Image src={location_icon} alt="location-icon" />
          <i>Bandung</i>
        </Typography>
        <Typography variant="h4" className="text-pandan">
          Rp 499.000
        </Typography>
        <Box className="grid gap-y-1">
          <SectionTitle>Variasi</SectionTitle>
          <Box className="flex gap-x-3 px-6">
            {["Hijau", "Biru", "Kuning"].map((variation) => (
              <Box className="px-8 py-2 border-pandan border" key={variation}>
                <Typography fontFamily={"sans-serif"}>{variation}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box>
          <SectionTitle>Detail</SectionTitle>
          <Box>{parse.parse(text)}</Box>
        </Box>
        <Button variant="contained">Tambahkan ke Registry</Button>
      </Box>
      <Box className="col-span-1">
        <ProductCart />
      </Box>
    </Box>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant="h6" fontFamily={"sans-serif"} className="font-bold">
      <i>{children}</i>
    </Typography>
  );
}