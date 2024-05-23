import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import ProductCarousel from "@/components/molecules/product-carousel";
import ProductCart from "@/components/molecules/cart";

import carousel_img_1 from "assets/events/registry/wedding/carousel/1.jpg";
import carousel_img_2 from "assets/events/registry/wedding/carousel/2.jpg";
import carousel_img_3 from "assets/events/registry/wedding/carousel/3.jpg";

import search_icon from "assets/utility/search.svg";
import ProductCard from "@/components/molecules/product-card";
import ProductDetailModal from "@/components/organisms/product-detail-modal";
import ClientProductList from "@/components/client-wrapper/product-list";
import ProductDetailModalClient from "@/components/organisms/product-detail-modal/client-wrapper";
import Dropdown from "@/components/molecules/input/dropdown";
import { FormProvider } from "react-hook-form";
import Text from "@/components/atoms/text";
import all_active from "assets/utility/categories/all-active.png"
import home_inactive from "assets/utility/categories/home-inactive.png"
import bath_inactive from "assets/utility/categories/bath-inactive.png"
import couple_inactive from "assets/utility/categories/couple-inactive.png"
import masak_inactive from "assets/utility/categories/masak-inactive.png"
import CButton from "@/components/atoms/button";
import { CategoryBox, CategoryItem, SortBox } from "./client-component";


type iFilterSections = Array<iFilterSection>;
type iFilterItem = {
  label: string;
  value: string;
  icon?: StaticImageData
};

type iFilterSection = {
  kind: string;
  items: Array<iFilterItem>;
  type: 'option' | 'checkbox' | 'radio' | 'range'
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

interface iCategory {
  label: string;
  value: string;
  icon: StaticImageData | string;
}

const CATEGORIES = [
  {
    label: "Semuanya",
    value: "all",
    icon: all_active,
  },
  {
    label: "Dekorasi Rumah",
    value: "dekor",
    icon: home_inactive,
  },
  {
    label: "Alat Masak",
    value: "masak",
    icon: masak_inactive,
  },
  {
    label: "Bath & Body",
    value: "bath",
    icon: bath_inactive,
  },
  {
    label: "Barang Couple",
    value: "couple",
    icon: couple_inactive,
  },
]

const FILTER_SECTIONS: iFilterSections = [
  {
    kind: "Brand",
    type: 'option',
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
    kind: "Jenis",
    type: 'checkbox',
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
    kind: "Harga",
    type: 'range',
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
    type: 'radio',
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

export default function EventShop({ params }: { params: { event: string } }) {
  const eventId = params.event
  return (
    <Box className="grid grid-cols-6 gap-x-10 pb-10 mt-6">
      <FilterAndSearch />
      <Box className="grid gap-y-5 col-span-4">
        <RegistryCarousel />
        <Box className="grid grid-cols-9 gap-x-5 gap-y-5">
          {/* Search Box */}
          <Box className="col-span-2">
            <SearchBox />
          </Box>

          {/* Sort Box */}
          <Box className="col-start-8 col-span-2">
            <SortBox/>
          </Box>

          {/* Category Box */}
          <Box className="col-start-2 col-span-7">
            <CategoryBox categories={CATEGORIES} />
          </Box>


        </Box>
        <ProductList eventId={eventId} />
      </Box>
      <RegistryCart />

      <ProductDetailModalClient />
    </Box>
  );
}

function FilterAndSearch() {
  return (
    <Box className="col-span-1 relative w-full flex-1">
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

function ProductList({ eventId }: { eventId: string }) {
  return (
    <ClientProductList eventId={eventId} />
  );
}

function RegistryCart() {
  return (
    <Box className="col-span-1 relative">
      <ProductCart nextPath="/registry/design" />
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

function SearchBox() {
  return (
    <TextField
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Image src={search_icon} alt="search-icon" />
          </InputAdornment>
        )
      }}
      placeholder="Cari di sini..."
      sx={{
        '& .MuiOutlinedInput-input': {
          paddingY: '6px'
        }
      }}
    />
  )
}

function FilterAndSearchSection({
  filterSections,
}: {
  filterSections: iFilterSections;
}) {
  return (
    <Box className="grid gap-y-5 fixed max-w-[inherit]">
      <FilterBox sections={filterSections} />
    </Box>
  );
}

function FilterBox({ sections }: { sections: iFilterSections }) {
  return (
    <Box className="grid gap-y-1 w-full">
      {sections.map((section) => (
        <FilterSection key={section.kind} section={section} />
      ))}
    </Box>
  );
}

function FilterSection({ section }: { section: iFilterSection }) {
  return (
    <Box className="grid gap-y-2 border-b border-gula pb-2">
      <Text className="text-pandan" variant="title" size="micro">
        {section.kind}
      </Text>
      <Box className="grid">
        {section.type === 'option' && section.items.map((item) => (
          <FilterItem key={item.value} item={item} />
        ))}
        {
          section.type === 'checkbox' && (
            <FormGroup>
              {
                section.items.map(item => (
                  <FormControlLabel
                    control={
                      <Checkbox name={item.value} sx={{ py: 0, px: 1 }} />
                    }
                    label={item.label}
                  />
                ))
              }
            </FormGroup>
          )
        }
        {
          section.type === 'range' && (
            <Slider />
          )
        }
        {
          section.type === 'radio' && (
            <RadioGroup defaultChecked={false}>
              {
                section.items.map(item => (
                  <FormControlLabel

                    label={item.label}
                    control={
                      <Radio defaultChecked={false} />
                    }
                  />
                ))
              }
            </RadioGroup>
          )
        }
      </Box>
    </Box>
  );
}

function FilterItem({ item }: { item: iFilterItem }) {
  return (
    <Box>
      <Text className="font-light">
        {item.label}
      </Text>
    </Box>
  );
}
