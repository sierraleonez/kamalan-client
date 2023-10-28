import ProductCart from "@/components/molecules/cart";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

import green_bg from 'assets/design-bg/green.jpg'

const options: Array<DesignOption> = [
  {
    title: 'Desain Normal',
    priceTag: 'Gratis',
    items: [
      {
        label: "Kamalan Hijau",
        value: "green-kamalan",
      },
      {
        label: "Kamalan Putih",
        value: "white-kamalan",
      },
    ]
  },
  {
    title: 'Desain Spesial',
    priceTag: 'Rp 5.000',
    items: [
      {
        label: 'Desain Artistik 1',
        value: 'artistic-design-1'
      }
    ]
  }
]

export default function DesignRegistry() {
  return (
    <Box className="grid grid-cols-6 gap-x-10 pb-10">
      <Box className="col-span-1">
        <RegistryDesignOptions designOptions={options} />
      </Box>
      <Box className="col-span-4">
        <Image
          src={green_bg}
          alt="design-bg"
        />
      </Box>
      <Box className="col-span-1 relative">
        <ProductCart />
      </Box>
    </Box>
  );
}

function RegistryDesignPickerField({
  title,
  priceTag,
  items,
}: {
  title: string;
  priceTag: string;
  items: Array<{ label: string; value: string | number }>;
}) {
  return (
    <Box className="grid gap-y-2">
      <Box>
        <Typography variant="h4" className="text-pandan">
          {title}
        </Typography>
        <Typography
          fontFamily={"serif"}
          variant="h6"
          className="text-kunyit font-bold"
        >
          {priceTag}
        </Typography>
      </Box>
      <Box className="grid gap-y-3">
        {items.map((item, idx) => (
          <RegistryDesignPickerItem key={`${item.label}-${idx}`} {...item} />
        ))}
      </Box>
    </Box>
  );
}

function RegistryDesignPickerItem({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return <Box className="w-full px-5 py-2 border border-pandan">{label}</Box>;
}

type iPickerItemProps = {
  label: string;
  value: string | number;
};

type DesignOption = {
  title: string;
  priceTag: string;
  items: Array<iPickerItemProps>;
};

function RegistryDesignOptions({
  designOptions,
}: {
  designOptions: Array<DesignOption>;
}) {
  return (
    <Box className="flex flex-col gap-y-10">
      {designOptions.map((option, idx) => (
        <RegistryDesignPickerField key={`design-option-${idx}`} {...option} />
      ))}
    </Box>
  );
}
