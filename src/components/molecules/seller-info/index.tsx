import Text from "@/components/atoms/text";
import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import location_icon from "assets/utility/location.svg";

export default function SellerInfo({
  logo,
  brand,
  location,
}: {
  logo: string | StaticImageData;
  brand: string;
  location: string;
}) {
  return (
    <Box className="flex items-center gap-x-2">
      <Box>
        <Image
          src={logo}
          alt="brand-logo"
          width={40}
          height={40}
          className="rounded-full"
        />
      </Box>
      <Box>
        <Text variant="copy" size="tiny" className="font-black">
          {brand}
        </Text>
        <Box className="flex gap-x-1 items-center ">
          <Image
            src={location_icon}
            width={11}
            height={16}
            alt="location-icon"
          />
          <Text variant="copy" size="micro">
            {location}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
