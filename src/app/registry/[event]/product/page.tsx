import {
  Box,
  Dialog,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Text from "@/components/atoms/text";
import Image, { StaticImageData } from "next/image";
import ProductCarousel from "@/components/molecules/product-carousel";
import ProductCart from "@/components/molecules/cart";
import LinkWrapper from "@/components/atoms/link-wrapper";

import carousel_img_1 from "assets/events/registry/wedding/carousel/1.jpg";
import carousel_img_2 from "assets/events/registry/wedding/carousel/2.jpg";
import carousel_img_3 from "assets/events/registry/wedding/carousel/3.jpg";

import product_1 from "assets/events/registry/wedding/product/1.jpg";
import product_2 from "assets/events/registry/wedding/product/2.jpg";
import product_3 from "assets/events/registry/wedding/product/3.jpg";
import search_icon from "assets/utility/search.svg";
import location_icon from "assets/utility/location.svg";
import dummy_logo from "assets/utility/dummy-logo.png";
import minus_icon from "assets/utility/minus.svg";
import plus_icon from "assets/utility/plus.svg";
import close_cion from "assets/utility/close.svg"
import ProductCard from "@/components/molecules/product-card";
import ProductGallery from "@/components/molecules/product-gallery";
import { DUMMY_PRODUCT_GALLERY } from "@/app/api/registry/product/dummy";
import { Parser } from "html-to-react";
import CButton from "@/components/atoms/button";

type iFilterSections = Array<iFilterSection>;
type iFilterItem = {
  label: string;
  value: string;
};

type iFilterSection = {
  kind: string;
  items: Array<iFilterItem>;
};

type iCarouselItemProps = {
  src: StaticImageData;
  alt: string;
};

type iProducts = Array<iProduct>;

type iProduct = {
  name: string;
  asset: StaticImageData | string;
  title: string;
  price: string;
  seller: string;
  location: string;
};

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

const DUMMY_WEDDING_PRODUCTS = [
  {
    name: "product_1",
    asset: product_1,
    title: "Cute Bouequet Indonesian Flowers",
    price: "499.000",
    seller: "Merekah Ruah",
    location: "Bandung",
  },
  {
    name: "product_2",
    asset: product_2,
    title: "Cute Bouequet Indonesian Flowers",
    price: "499.000",
    seller: "Merekah Ruah",
    location: "Bandung",
  },
  {
    name: "product_3",
    asset: product_3,
    title: "Cute Bouequet Indonesian Flowers",
    price: "499.000",
    seller: "Merekah Ruah",
    location: "Bandung",
  },
];

const FILTER_SECTIONS: iFilterSections = [
  {
    kind: "Kategori",
    items: [
      {
        label: "Dekorasi Rumah",
        value: "dekor",
      },
      {
        label: "Alat Masak",
        value: "masak",
      },
      {
        label: "Kamar Tidur",
        value: "kamar",
      },
      {
        label: "Bath & Body",
        value: "bath",
      },
      {
        label: "Barang Couple",
        value: "couple",
      },
    ],
  },
  {
    kind: "Jenis",
    items: [
      {
        label: "Voucher",
        value: "voucher",
      },
      {
        label: "Hampers",
        value: "hampers",
      },
      {
        label: "Satuan",
        value: "satuan",
      },
    ],
  },
  {
    kind: "Brand",
    items: [
      {
        label: "Brand A",
        value: "brand-a",
      },
      {
        label: "Brand B",
        value: "brand-b",
      },
      {
        label: "Brand C",
        value: "brand-c",
      },
    ],
  },
  {
    kind: "Harga",
    items: [
      {
        label: "< Rp 500.000",
        value: "1",
      },
      {
        label: "> Rp 500.000",
        value: "2",
      },
    ],
  },
  {
    kind: "Wilayah",
    items: [
      {
        label: "Jakarta",
        value: "jkt",
      },
      {
        label: "Bandung",
        value: "bdg",
      },
      {
        label: "Jogjakarta",
        value: "jog",
      },
      {
        label: "Surabaya",
        value: "sby",
      },
      {
        label: "Bali",
        value: "bli",
      },
    ],
  },
];

const CAROUSEL_ITEMS = [
  {
    src: carousel_img_1,
    alt: "carousel_item_1",
  },
  {
    src: carousel_img_2,
    alt: "carousel_item_2",
  },
  {
    src: carousel_img_3,
    alt: "carousel_item_3",
  },
];

export default function EventShop() {
  const parse = Parser();
  return (
    <Box className="grid grid-cols-6 gap-x-10 pb-10 mt-6">
      <FilterAndSearch />
      <Box className="grid gap-y-5 col-span-4">
        <RegistryCarousel />
        <ProductList />
      </Box>
      <RegistryCart />

      <Dialog
        maxWidth={"xl"}
        fullWidth
        open
        className="flex items-center justify-center w-full"
      >
        <Box className="w-[1180px] bg-white p-10 ">
          <Box className="grid grid-cols-8">
            <Box className="col-span-5 relative">
              {/* <ProductGallery
                items={DUMMY_PRODUCT_GALLERY}
                thumbnailPosition="left"
              /> */}
            </Box>
            <Box className="col-span-3 flex flex-col">
              <Box className="flex justify-end">
              <Image src={close_cion} alt="close_icon" />

              </Box>
              <Box className="flex flex-col gap-y-4">
                <Text variant="title" size="medium">
                  Product Name
                </Text>
                <Text
                  variant="copy"
                  size="giant"
                  className="font-black text-pandan"
                >
                  Rp 249.000
                </Text>
                <SellerInfo />
              </Box>
              <Box>{parse.parse(text)}</Box>
              <Box>
                <Text variant="copy" size="tiny" className="font-black">
                  Varian:
                </Text>
                <Box className="flex flex-wrap gap-x-1 gap-y-1">
                  {[
                    { label: "Varian A", value: "a" },
                    { label: "Varian B", value: "b" },
                    { label: "Varian C", value: "c" },
                    { label: "Varian D", value: "d" },
                    { label: "Varian E", value: "e" },
                  ].map((item) => (
                    <Box
                      key={item.value}
                      className="px-8 py-2 border border-gula"
                    >
                      <Text variant="copy" size="tiny" className="text-pandan">
                        {item.label}
                      </Text>
                    </Box>
                  ))}
                </Box>
                <Box className="flex items-center w-full justify-between">
                  <Text variant="copy" size="tiny" className="font-black">
                    Jumlah
                  </Text>
                  <Box className="flex w-28 justify-between">
                    <Image src={minus_icon} alt="minus_icon" />
                    <Text variant="copy" size="small">
                      1
                    </Text>
                    <Image src={plus_icon} alt="plus_icon" />
                  </Box>
                </Box>
                <CButton>
                  <Text variant="copy" size="medium" className="font-black">
                    Tambahkan ke Registry
                  </Text>
                </CButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}

function SellerInfo() {
  return (
    <Box className="flex items-center gap-x-2">
      <Box>
        <Image
          src={dummy_logo}
          alt="brand-logo"
          width={40}
          height={40}
          className="rounded-full"
        />
      </Box>
      <Box>
        <Text variant="copy" size="tiny" className="font-black">
          Brand A
        </Text>
        <Box className="flex gap-x-1 items-center ">
          <Image
            src={location_icon}
            width={11}
            height={16}
            alt="location-icon"
          />
          <Text variant="copy" size="micro">
            Jakarta
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function FilterAndSearch() {
  return (
    <Box className="col-span-1">
      <FilterAndSearchSection filterSections={FILTER_SECTIONS} />
    </Box>
  );
}

function RegistryCarousel() {
  return (
    <Box>
      <ProductCarousel>
        {CAROUSEL_ITEMS.map((item) => (
          <ProductCarouselItem key={item.alt} {...item} />
        ))}
      </ProductCarousel>
    </Box>
  );
}

function ProductList() {
  return (
    <Box className="grid grid-cols-3 gap-x-5">
      {DUMMY_WEDDING_PRODUCTS.map((product, idx) => (
        <ProductCard product={product} key={product.name + "-" + idx} />
      ))}
    </Box>
  );
}

function RegistryCart() {
  return (
    <Box className="col-span-1 relative">
      <ProductCart />
    </Box>
  );
}

function ProductCarouselItem({ alt, src }: iCarouselItemProps) {
  return (
    <Box>
      <Image src={src} alt={alt} />
    </Box>
  );
}

function FilterAndSearchSection({
  filterSections,
}: {
  filterSections: iFilterSections;
}) {
  return (
    <Box className="grid gap-y-5 fixed">
      <SearchBox />
      <FilterBox sections={filterSections} />
    </Box>
  );
}
function SearchBox() {
  return (
    <Box className="">
      <OutlinedInput
        placeholder="Cari gift"
        endAdornment={
          <InputAdornment position="end">
            <Image src={search_icon} alt="search-icon" />
          </InputAdornment>
        }
      />
    </Box>
  );
}

function FilterBox({ sections }: { sections: iFilterSections }) {
  return (
    <Box className="grid gap-y-1">
      {sections.map((section) => (
        <FilterSection key={section.kind} section={section} />
      ))}
    </Box>
  );
}

function FilterSection({ section }: { section: iFilterSection }) {
  return (
    <Box className="grid gap-y-2 border-b border-gula pb-2">
      <Typography className="text-pandan" variant="h5">
        {section.kind}
      </Typography>
      <Box className="grid">
        {section.items.map((item) => (
          <FilterItem key={item.value} item={item} />
        ))}
      </Box>
    </Box>
  );
}

function FilterItem({ item }: { item: iFilterItem }) {
  return (
    <Box>
      <Typography
        key={item.value}
        variant="button"
        fontFamily={"Helvetica Neue"}
      >
        {item.label}
      </Typography>
    </Box>
  );
}
