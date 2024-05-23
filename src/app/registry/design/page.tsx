"use client";
import ProductCart from "@/components/molecules/cart";
import { Box, CircularProgress } from "@mui/material";
import Image from "next/image";

import green_love from "assets/love.svg";
import Text from "@/components/atoms/text";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setSelectedDesign } from "@/lib/features/registry/registryCreationSlice";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { useGetRegistryDesignQuery } from "@/lib/services/design";
import { iDesignPickerItem } from "@/lib/services/type";
import { useGetCartItemsQuery, useStepTwoMutation } from "@/lib/services/registries";
import { openToast } from "@/lib/features/global/toastSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DesignRegistry() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { name, design_id: selectedDesign, id: registryId } = useAppSelector(state => state.registryCreation.registry)
  const { data: products } = useGetCartItemsQuery(registryId)
  const [submitStepTwo] = useStepTwoMutation()
  const { data: designOptions, isLoading } = useGetRegistryDesignQuery()
  const bgSource = selectedDesign ? designOptions?.find(option => option.value === selectedDesign)?.asset_url : designOptions?.[0].asset_url

  useEffect(() => {
    if (!selectedDesign && designOptions?.length) {
      const defaultDesign = designOptions[0].value
      dispatch(setSelectedDesign(defaultDesign))
    }
  }, [designOptions, selectedDesign])

  // const validationSchema = 
  async function onSubmit() {
    try {
      if (selectedDesign) {
        await submitStepTwo({
          design_id: selectedDesign || "",
          registry_id: registryId
        })
        router.push('/registry/form')
      }
    } catch (err) {
      console.log(err)
      dispatch(
        openToast({
          message: 'Something is wrong..'
        })
      )

    }
  }
  return (
    <Box className="grid grid-cols-6 gap-x-10 pb-10">
      {
         isLoading && (
          <Box className="absolute top-1/2 right-1/2 z-50 bg-white px-20 py-10 rounded-lg">
            <CircularProgress />
          </Box>

        )
      }
      <Box className="col-span-1">
        <Box className="border py-8 border-gula border-dashed w-full flex flex-col items-center justify-center gap-y-3">
          <Image src={green_love} alt="green_love" width={60} />
          <Text size="tiny" className="font-light text-kluwak text-center">
            <i>Silakan pilih desain Registry sesuai dengan seleramu!</i>
          </Text>
        </Box>
        <RegistryDesignOptions designOptions={[{ title: 'Desain Normal', priceTag: 'Gratis', items: designOptions || [] }]} />
      </Box>
      <Box className="col-span-4 relative flex flex-col items-center justify-center">
        <Box className="absolute w-[441px] flex flex-col items-center justify-center gap-y-10 py-10">
          <Text variant="title" size="small" className="text-white" >{name}</Text>
          <Box className="grid grid-cols-4">
            {(products || []).map((product, idx) => (
              <Link
                key={product.name + idx}
                className="text-start font-serif col-start-2 col-span-2 grid grid-cols-4 items-center gap-x-4"
                href={product.id}
                target="_blank"
              >
                <p className="text-kunyit text-6xl h-fit col-span-1 min-h-[64px]">
                  {idx + 1}
                </p>
                <p className="text-kemiri text-xl w-full h-fit col-span-3">
                  {product.name}
                </p>
              </Link>
            ))}
          </Box>
        </Box>
        <Image src={bgSource || ""} width={1920} height={1080} alt="design-bg" />
      </Box>
      <Box className="col-span-1 relative">
        <ProductCart onClick={onSubmit} />
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
    (state) => state.registryCreation.registry.design_id
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

type DesignOption = {
  title: string;
  priceTag: string;
  items: Array<iDesignPickerItem>;
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
