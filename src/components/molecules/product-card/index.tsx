import LinkWrapper from "@/components/atoms/link-wrapper";
import Text from "@/components/atoms/text";
import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import location_icon from "assets/utility/location.svg";

type iProduct = {
  name: string;
  asset: StaticImageData | string;
  title: string;
  price: string;
  seller: string;
  location: string;
};

export default function ProductCard({ product }: { product: iProduct }) {
  return (
    <Box className="grid">
      <LinkWrapper pushPath={product.name}>
        <Image src={product.asset} height={475} alt="product_image" />
        <Box className="border-x border-b border-gula px-5 py-4">
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
      </LinkWrapper>
    </Box>
  );
}
