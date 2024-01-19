"use client";
import ProductCart from "@/components/molecules/cart";
import { Box } from "@mui/material";
import Image from "next/image";

import green_love from "assets/love.svg";
import green_bg from "assets/design-bg/green.jpg";
import Text from "@/components/atoms/text";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setSelectedDesign } from "@/lib/features/registry/registryCreationSlice";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const options: Array<DesignOption> = [
  {
    title: "Desain Normal",
    priceTag: "Gratis",
    items: [
      {
        label: "Kamalan Hijau",
        value: "Pandan",
      },
      {
        label: "Kamalan Putih",
        value: "Kinantan",
      },
    ],
  },
];

export default function DesignRegistry() {
  const { selectedDesign, name, selectedProducts } = useAppSelector(state => state.registryCreation)
  const bgSource = selectedDesign ? `/static/asset/design-bg/${selectedDesign}.png` : `/static/asset/design-bg/Pandan.png`
  return (
    <Box className="grid grid-cols-6 gap-x-10 pb-10">
      <Box className="col-span-1">
        <Box className="border py-8 border-gula border-dashed w-full flex flex-col items-center justify-center gap-y-3">
          <Image src={green_love} alt="green_love" width={60} />
          <Text size="tiny" className="font-light text-kluwak text-center">
            <i>Silakan pilih desain Registry sesuai dengan seleramu!</i>
          </Text>
        </Box>
        <RegistryDesignOptions designOptions={options} />
      </Box>
      <Box className="col-span-4 relative flex flex-col items-center justify-center">
        <Box className="absolute w-[441px] flex flex-col items-center justify-center gap-y-10 py-10">
          <Text variant="title" size="small" className="text-white" >{name}</Text>
          <Box className="grid grid-cols-4">
            {selectedProducts.map((product, idx) => (
              <Link
                key={product.product.name + idx}
                className="text-start font-serif col-start-2 col-span-2 grid grid-cols-4 items-center gap-x-4"
                href={product.product.name}
                target="_blank"
              >
                <p className="text-kunyit text-6xl h-fit col-span-1 min-h-[64px]">
                  {idx + 1}
                </p>
                <p className="text-kemiri text-xl w-full h-fit col-span-3">
                  {product.product.title}
                </p>
              </Link>
            ))}
          </Box>
        </Box>
        <Image src={bgSource} width={1920} height={1080} alt="design-bg" />
      </Box>
      <Box className="col-span-1 relative">
        <ProductCart nextPath="/registry/form" />
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
        <Text variant="title" size="tiny" className="text-pandan">
          {title}
        </Text>
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
  const dispatch = useAppDispatch();
  const selectedDesign = useAppSelector(
    (state) => state.registryCreation.selectedDesign
  );
  const isActive = selectedDesign === value;
  const classActive = "bg-seledri border-seledri text-white font-black";
  return (
    <Box
      className={twMerge(
        "w-full px-5 py-2 border border-gula cursor-pointer",
        isActive ? classActive : ""
      )}
      onClick={() => dispatch(setSelectedDesign(value))}
    >
      <Text size="tiny">{label}</Text>
    </Box>
  );
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
