"use client";

import CButton from "@/components/atoms/button";
import Text from "@/components/atoms/text";
import SellerInfo from "@/components/molecules/seller-info";
import { Box, CircularProgress, Dialog } from "@mui/material";
import Image from "next/image";
import { Parser } from "html-to-react";
import close_icon from "assets/utility/close.svg";
import minus_icon from "assets/utility/minus.svg";
import plus_icon from "assets/utility/plus.svg";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { closeProductDetailModal, setVariantProductDetailModal } from "@/lib/features/global/modalSlice";
import VariantItem from "@/components/atoms/variant-item";
import { createImageGallerySource } from "@/app/api/registry/product/dummy";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { iProductDetail } from "@/lib/services/products";
import { useMemo, useState } from "react";
import { useAddToRegistryCartMutation } from "@/lib/services/registries";
import { openToast } from "@/lib/features/global/toastSlice";

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
  const registryId = useAppSelector(state => state.registryCreation.registry.id)
  const productApi = useAppSelector(state => state.productApi)
  const modal = useAppSelector(state => state.modal)
  const [productQty, setProductQty] = useState<number>(1)
  const [addProductToCart, { isLoading }] = useAddToRegistryCartMutation()

  const { productDetail: { open, props, selectedVariant } } = modal
  const productDetail = productApi.queries?.[`getDetailProduct("${props.id}")`]?.data as iProductDetail
  const productVariations = useMemo(() => {
    const variations = productDetail?.productVariations
    if (variations) {
      return variations.map(item => ({ label: item.name, value: item.id }))
    } else {
      return []
    }
  }, [productDetail?.id])

  const dispatch = useAppDispatch();
  const parse = Parser();

  function decreaseQty() {
    const finalQty = productQty - 1
    if (finalQty > 0) {
      setProductQty(finalQty)
    }
  }

  function increaseQty() {
    const selectedProductVariation = productDetail.productVariations.find(variation => variation.id === selectedVariant)
    // console.log(selectedProductVariation)
    const finalQty = productQty + 1
    if ((selectedProductVariation?.qty || 1) >= (finalQty)) {
      setProductQty(finalQty)
    }
  }

  return (
    <Dialog
      maxWidth={"xl"}
      fullWidth
      keepMounted={false}
      open={open}
      className="flex items-center justify-center w-full"
    >
      {!productDetail ? (
        <CircularProgress />
      ) : (

        <Box className="w-[1180px] bg-white p-10 relative">
          <Box className="grid grid-cols-8 gap-x-4">
            <Box className="col-span-5 relative">
              <Carousel
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                showThumbs
                onClickThumb={e => {
                  dispatch(setVariantProductDetailModal(productDetail.images[e].product_variation_id))
                }}
                renderThumbs={e => { return e.map(el => el) }}
                selectedItem={productDetail.images.findIndex(e => e.product_variation_id === selectedVariant)}
              >
                {
                  createImageGallerySource(productDetail.images || []).map(img => (
                    <Image style={{ maxHeight: 480 }} key={img.original} src={img.original} width={img.originalWidth} height={img.originalHeight} alt="t" />
                  ))
                }
              </Carousel>

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
                  {productDetail.name}
                </Text>
                <Text
                  variant="copy"
                  size="giant"
                  className="font-black text-pandan"
                >
                  Rp {productDetail.default_price}
                </Text>
                <SellerInfo
                  brand={productDetail.brand.name}
                  location={productDetail.brand.location}
                  logo={productDetail.brand.thumbnail_url}
                />
              </Box>
              <Box>
                <Text size="tiny" className="leading-5">
                  {parse.parse(productDetail.description)}
                </Text>
              </Box>
              <Box className="flex flex-col gap-y-5">
                <Text variant="copy" size="tiny" className="font-black">
                  Varian:
                </Text>
                <Box className="flex flex-wrap gap-x-1 gap-y-1">
                  {productVariations.map((item) => (
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
                    <Image onClick={decreaseQty} src={minus_icon} alt="minus_icon" />
                    <Text variant="copy" size="small">
                      {productQty}
                    </Text>
                    <Image onClick={increaseQty} src={plus_icon} alt="plus_icon" />
                  </Box>
                </Box>
                <CButton
                  loading={isLoading}
                  onClick={async () => {
                    try {
                      await addProductToCart({
                        body: {
                          product_variation_id: selectedVariant,
                          qty: productQty
                        },
                        params: registryId
                      }).unwrap()
                      dispatch(closeProductDetailModal());
                    } catch (err: any) {
                      dispatch(openToast({
                        message: err.data.message,
                        type: 'error'
                      }))
                    }
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
      )}

    </Dialog>
  );
}
