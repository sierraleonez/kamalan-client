import { Box, InputAdornment, OutlinedInput, Typography } from "@mui/material";

import carousel_img_1 from "assets/events/registry/wedding/carousel/1.jpg";
import carousel_img_2 from "assets/events/registry/wedding/carousel/2.jpg";
import carousel_img_3 from "assets/events/registry/wedding/carousel/3.jpg";
import Image from "next/image";
import ProductCarousel from "@/components/molecules/product-carousel";
import green_love from "assets/love.svg";
import product_1 from 'assets/events/registry/wedding/product/1.jpg'
import product_2 from 'assets/events/registry/wedding/product/2.jpg'
import product_3 from 'assets/events/registry/wedding/product/3.jpg'

const DUMMY_WEDDING_PRODUCTS = [
  {
    name: 'product_1',
    asset: product_1
  },
  {
    name: 'product_2',
    asset: product_2
  },
  {
    name: 'product_3',
    asset: product_3
  },
]

const FILTER_ITEMS = [
  {
    kind: "Kategori",
    children: [
      {
        title: "Dekorasi Rumah",
        value: "dekor",
      },
      {
        title: "Alat Masak",
        value: "masak",
      },
      {
        title: "Kamar Tidur",
        value: "kamar",
      },
      {
        title: "Bath & Body",
        value: "bath",
      },
      {
        title: "Barang Couple",
        value: "couple",
      },
    ],
  },
  {
    kind: "Jenis",
    children: [
      {
        title: "Voucher",
        value: "voucher",
      },
      {
        title: "Hampers",
        value: "hampers",
      },
      {
        title: "Satuan",
        value: "satuan",
      },
    ],
  },
  {
    kind: "Brand",
    children: [
      {
        title: "Brand A",
        value: "brand-a",
      },
      {
        title: "Brand B",
        value: "brand-b",
      },
      {
        title: "Brand C",
        value: "brand-c",
      },
    ],
  },
  {
    kind: "Harga",
    children: [
      {
        title: "< Rp 500.000",
        value: "1",
      },
      {
        title: "> Rp 500.000",
        value: "2",
      },
    ],
  },
  {
    kind: "Wilayah",
    children: [
      {
        title: "Jakarta",
        value: "jkt",
      },
      {
        title: "Bandung",
        value: "bdg",
      },
      {
        title: "Jogjakarta",
        value: "jog",
      },
      {
        title: "Surabaya",
        value: "sby",
      },
      {
        title: "Bali",
        value: "bli",
      },
    ],
  },
];

export default function EventShop() {
  return (
    <Box className="grid grid-cols-6 gap-x-10">
      <Box className="col-span-1">
        <FilterAndSearchSection />
      </Box>
      <Box className="grid gap-y-5 col-span-4">
        <Box>
          <ProductCarousel>
            <Box key={"t1"}>
              <Image src={carousel_img_1} alt="carousel" />
            </Box>
            <Box key={"t2"}>
              <Image src={carousel_img_2} alt="carousel" />
            </Box>
            <Box key={"t3"}>
              <Image src={carousel_img_3} alt="carousel" />
            </Box>
          </ProductCarousel>
        </Box>
        <Box className="grid grid-cols-3 gap-x-5">
          {DUMMY_WEDDING_PRODUCTS.map(product => (
            <Box key={product.name}>
              <Image src={product.asset} alt="product_image"/>
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <RegistryCart />
      </Box>
    </Box>
  );
}

function RegistryCart() {
  return (
    <Box className="grid gap-y-3">
      <Typography variant="h5" className="text-pandan text-center">
        Tulis nama Registry di sini!
      </Typography>
      <Box className="px-3 border-seledri border min-h-[600px] gap-y-2 flex flex-col justify-center items-center">
          <Image src={green_love} alt="green_love" />
          <Typography align="center">
            Hadiah yang telah kamu pilih akan muncul di daftar ini!
          </Typography>
      </Box>
    </Box>
  );
}

function FilterAndSearchSection() {
  return (
    <Box className="grid gap-y-5">
      <SearchBox />
      <FilterBox />
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
            <Typography>test</Typography>
          </InputAdornment>
        }
      />
    </Box>
  );
}

function FilterBox() {
  return (
    <Box className="grid gap-y-1">
      {FILTER_ITEMS.map((filter) => (
        <Box
          key={filter.kind}
          className="grid gap-y-2 border-b border-gula pb-2"
        >
          <Typography className="text-pandan" variant="h5">
            {filter.kind}
          </Typography>
          <Box className="grid">
            {filter.children.map((filterVal) => (
              <Typography
                key={filterVal.value}
                variant="button"
                fontFamily={"Helvetica Neue"}
              >
                {filterVal.title}
              </Typography>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
