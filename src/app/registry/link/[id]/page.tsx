import { Box } from "@mui/material";
// import { FormProvider, UseFormRegister, useForm, useFormContext } from "react-hook-form";

// import dummy_store_icon from 'assets/utility/dummy-logo.png'
// import dummy_product_thumb from 'assets/dummy/dummy-icon-0.png'
// import { StaticImageData } from "next/image";
// import SellerInfo from "@/components/molecules/seller-info";
// import InputWithLabel from "@/components/molecules/input";
// import CButton from "@/components/atoms/button";
// import { useShowPublicRegistryQuery } from "@/lib/services/registries";
import RegistryShareCard from "@/components/client-wrapper/registry-share-card";

// const DUMMY_DELIVERY_OPTION = [
//   {
//     id: "tiki",
//     label: "TIKI Reguler",
//     price: "34.000"
//   },
//   {
//     id: "jne",
//     label: "JNE",
//     price: "32.000"
//   },
//   {
//     id: "sicepat",
//     label: "Sicepat Express",
//     price: "20.000"
//   },
// ]

// const DUMMY_CHECKOUT_PRODUCT_LIST = [
//   {
//     brand: {
//       id: "brand_a",
//       name: "Brand A",
//       location: "Jakarta",
//       icon: dummy_store_icon
//     },
//     products: [
//       {
//         id: "product_1",
//         thumb: dummy_product_thumb,
//         name: "Product 1",
//         price: "249.000"
//       },
//       {
//         id: "product_2",
//         thumb: dummy_product_thumb,
//         name: "Product 2",
//         price: "449.000"
//       }
//     ]
//   },
//   {
//     brand: {
//       id: "brand_b",
//       name: "Brand B",
//       location: "Jakarta",
//       icon: dummy_store_icon
//     },
//     products: [
//       {
//         id: "product_3",
//         thumb: dummy_product_thumb,
//         name: "Product 3",
//         price: "249.000"
//       },
//       {
//         id: "product_4",
//         thumb: dummy_product_thumb,
//         name: "Product 4",
//         price: "449.000"
//       }
//     ]
//   },
// ]

export default function RegistryDynamicLink({ params }: { params: { id: string } }) {
  const id = params.id
  return (
    <Box className="flex flex-col px-28 items-center justify-center gap-y-16 w-full">
      <RegistryShareCard registryId={id}/>
      {/* <Text size="small">Hadiah ini akan dikirim ke Mawar yang berada di Bintaro</Text>
      <FormProvider {...methods}>
        <form className="w-full" onSubmit={methods.handleSubmit((e) => console.log(e))}>
          <Box className="grid grid-cols-2 w-full gap-x-28">
            <Box>
              <Text variant="title" size="small" className="text-pandan">Hadiah Terpilih</Text>
              <CheckoutBrandList detailList={DUMMY_CHECKOUT_PRODUCT_LIST} />
            </Box>
            <Box className="flex flex-col gap-y-10">
              <Box className="flex flex-col gap-y-6">
                <SectionTitle>Lengkapi Data</SectionTitle>
                <Box className="w-full flex flex-col gap-y-3">
                  <InputWithLabel required label="Nama Pengirim" name="sender-name" />
                  <InputWithLabel required label="Email Pengirim" name="sender-mail" type="email" />
                </Box>
              </Box>

              <Box className="flex flex-col gap-y-6">
                <SectionTitle>Ringkasan Biaya</SectionTitle>
                <Box className="w-full flex flex-col gap-y-3">
                  <Box className="grid grid-cols-2 w-full gap-y-4 pb-3">
                    <Text className="text-xl">Jumlah Hadiah</Text>
                    <Text className="text-seledri text-xl font-black justify-self-end">Rp. 350.000</Text>
                    <Text className="text-xl">Ongkos Kirim</Text>
                    <Text className="text-seledri text-xl font-black justify-self-end">Rp. 0</Text>
                  </Box>
                  <Box className="grid grid-cols-2 border-t border-gula pt-3">
                    <Text className="text-2xl">Total Biaya</Text>
                    <Text className="justify-self-end font-black text-wortel text-2xl">Rp. 350.000</Text>
                  </Box>
                  <Box className="flex justify-end">
                    <CButton type="submit">Bayar</CButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </form>
      </FormProvider> */}
    </Box>
  )
}

// function SectionTitle({ children }: { children: React.ReactNode }) {
//   return (
//     <Box className="w-full border-b-2 border-gula pb-3">
//       <Text variant="title" size="small" className="text-pandan">{children}</Text>
//     </Box>
//   )
// }

// type iBrandDetail = {
//   id: string
//   name: string
//   location: string
//   icon: StaticImageData | string
// }

// type iProductCheckout = {
//   id: string
//   thumb: StaticImageData
//   name: string
//   price: string
// }

// type iCheckoutBrandDetail = {
//   brand: iBrandDetail
//   products: Array<iProductCheckout>

// }

// function CheckoutBrandList({ detailList }: { detailList: Array<iCheckoutBrandDetail> }) {
//   return (
//     <Box className="flex flex-col gap-y-8">
//       {detailList.map(detail => (
//         <CheckoutBrand key={detail.brand.id} detail={detail} />
//       ))}
//     </Box>
//   )
// }

// function CheckoutBrand({ detail }: { detail: iCheckoutBrandDetail }) {
//   const { brand, products } = detail
//   const { register, watch } = useFormContext()
//   const values = (watch([...detail.products.map(product => product.id)]))
//   const isProductSelected = values.some(val => val)

//   return (
//     <Box className="border-t border-gula grid gap-y-5 pt-5">
//       <SellerInfo
//         brand={brand.name}
//         location={brand.location}
//         logo={brand.icon}
//       />
//       {products.map(product => (
//         <CheckoutProductListItem register={register} productDetail={product} key={product.id} />
//       ))}
//       <GreetingAndDeliverySection disabled={!isProductSelected} brandName={brand.id}/>
//     </Box>
//   )
// }

// function CheckoutProductListItem({ productDetail, register }: { productDetail: iProductCheckout, register: UseFormRegister<any> }) {
//   return (
//     <Box className="flex w-full">
//       <Checkbox {...register(productDetail.id)} />
//       <Box className="flex w-full justify-between items-center">
//         <Box className="flex items-center gap-x-4">
//           <Image src={productDetail.thumb} alt="product-thumbnail" />
//           <Text size="small">{productDetail.name}</Text>
//         </Box>
//         <Box>
//           <Text size="tiny" className="font-black text-seledri">{productDetail.price}</Text>
//         </Box>
//       </Box>
//     </Box>
//   )
// }

// function DeliveryOption({ name, label, disabled }: { name: string; label: string; disabled: boolean }) {
//   const { register, formState: { errors } } = useFormContext()
//   return (
//     <FormControl>
//       <InputLabel id="delivery">{label}</InputLabel>
//       <Select disabled={disabled} {...register(name, { required: true, disabled })} label={label} error={!!errors[name]} id="delivery">
//         {DUMMY_DELIVERY_OPTION.map((option) => (
//           <MenuItem key={option.id} value={option.id}>{option.label + " - " + option.price}</MenuItem>
//         ))}
//       </Select>
//     </FormControl>
//   )
// }

// function GreetingAndDeliverySection({brandName, disabled = false}: { brandName: string; disabled?: boolean }) {
//   return (
//     <Box className="grid grid-cols-2 w-full gap-x-4">
//       <InputWithLabel
//         disabled={disabled}
//         label="Kartu Ucapan"
//         multiline
//         minRows={1}
//         name={`greeting-card-${brandName}`}
//       />
//       <DeliveryOption
//         disabled={disabled}
//         name={`delivery-option-${brandName}`}
//         label="Pilih Jenis Pengiriman"
//       />
//     </Box>
//   )
// }