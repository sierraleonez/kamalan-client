"use client";

import CButton from "@/components/atoms/button";
import Text from "@/components/atoms/text";
import SellerInfo from "@/components/molecules/seller-info";
import { Box, Dialog } from "@mui/material";
import Image from "next/image";
import dummy_logo from "assets/utility/dummy-logo.png";
import { Parser } from "html-to-react";
import close_icon from "assets/utility/close.svg";
import minus_icon from "assets/utility/minus.svg";
import plus_icon from "assets/utility/plus.svg";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { closeProductDetailModal } from "@/lib/features/global/modalSlice";
import VariantItem from "@/components/atoms/variant-item";
import { pushProductRegistry } from "@/lib/features/registry/registryCreationSlice";

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

export default function ProductDetailModal() {
  const { open, props, selectedVariant } = useAppSelector(
    (state) => state.modal.productDetail
  );
  const dispatch = useAppDispatch();
  const parse = Parser();
  return (
    <Dialog
      maxWidth={"xl"}
      fullWidth
      open={open}
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
          <Box className="col-span-3 flex flex-col gap-y-5">
            <Box
              className="flex justify-end pointer-auto"
              onClick={() => dispatch(closeProductDetailModal())}
            >
              <Image src={close_icon} alt="close_icon" />
            </Box>
            <Box className="flex flex-col gap-y-4">
              <Text variant="title" size="medium">
                {props.title}
              </Text>
              <Text
                variant="copy"
                size="giant"
                className="font-black text-pandan"
              >
                Rp 249.000
              </Text>
              <SellerInfo
                brand="Brand A"
                location="Jakarta"
                logo={dummy_logo}
              />
            </Box>
            <Box>{parse.parse(text)}</Box>
            <Box className="flex flex-col gap-y-5">
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
                  <VariantItem
                    isSelected={selectedVariant === item.value}
                    key={item.value}
                    item={item}
                  />
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
              <CButton
                onClick={() => {
                  dispatch(closeProductDetailModal());
                  dispatch(
                    pushProductRegistry({
                      product: props,
                      qty: 1,
                      variant: selectedVariant,
                    })
                  );
                }}
              >
                <Text variant="copy" size="medium" className="font-black">
                  Tambahkan ke Registry
                </Text>
              </CButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}
