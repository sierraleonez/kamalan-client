import {
  Box,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import ProductCarousel from "@/components/molecules/product-carousel";
import ProductCart from "@/components/molecules/cart";

import carousel_img_1 from "assets/events/registry/wedding/carousel/1.jpg";
import carousel_img_2 from "assets/events/registry/wedding/carousel/2.jpg";
import carousel_img_3 from "assets/events/registry/wedding/carousel/3.jpg";

import product_1 from "assets/events/registry/wedding/product/1.jpg";
import product_2 from "assets/events/registry/wedding/product/2.jpg";
import product_3 from "assets/events/registry/wedding/product/3.jpg";
import search_icon from "assets/utility/search.svg";
import ProductCard from "@/components/molecules/product-card";
import ProductDetailModal from "@/components/organisms/product-detail-modal";

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
  return (
    <Box className="grid grid-cols-6 gap-x-10 pb-10 mt-6">
      <FilterAndSearch />
      <Box className="grid gap-y-5 col-span-4">
        <RegistryCarousel />
        <ProductList />
      </Box>
      <RegistryCart />

      <ProductDetailModal />
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
