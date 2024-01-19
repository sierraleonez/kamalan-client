import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import LinkWrapper from "@/components/atoms/link-wrapper";
import Text from "@/components/atoms/text";

export default function HeroHalf({
  asset,
  title,
  labelColor = "text-pandan"
}: {
  asset: StaticImageData;
  title: React.ReactNode;
  labelColor?: string
}) {
  return (
    <Box className="min-h-screen relative w-1/2">
      <Image src={asset} alt="hero-bg" className="absolute z-0" fill />
      <Box className="absolute w-full h-full flex items-end px-40 pb-40 ">
        <LinkWrapper rewritePath="/registry/event">
          <Text className={labelColor} variant="title" size="giant">
            {title}
          </Text>
        </LinkWrapper>
      </Box>
    </Box>
  );
}
