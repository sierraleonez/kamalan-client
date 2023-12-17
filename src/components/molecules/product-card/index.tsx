import Text from "@/components/atoms/text";
import { Box } from "@mui/material";
import Image from "next/image";

import location_icon from "assets/utility/location.svg";
import ProductCardClientWrapper from "./client-wrapper";
import { iProduct } from "@/types";

export default function ProductCard({ product }: { product: iProduct }) {
  return (
    <Box className="grid cursor-pointer">
      <ProductCardClientWrapper product={product}>
        <Image src={product.asset} height={475} alt="product_image" />
        <Box className="border-x border-b border-gula hover:border-pandan px-5 py-4 gap-y-2 flex flex-col">
          <Text variant="copy" size="tiny">
            {product.title}
          </Text>
          <Text variant="copy" size="medium" className="font-black text-pandan">
            Rp {product.price}
          </Text>
          <Text variant="copy" size="tiny">
            {product.seller}
          </Text>
          <Box className="flex items-center gap-x-1">
            <Image
              src={location_icon}
              alt="location-icon"
              width={12}
              height={18}
            />
            <Text variant="copy" size="tiny">
              {product.location}
            </Text>
          </Box>
        </Box>
      </ProductCardClientWrapper>
    </Box>
  );
}
