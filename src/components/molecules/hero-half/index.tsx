import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

export default function HeroHalf({
  asset,
  title,
}: {
  asset: StaticImageData;
  title: React.ReactNode;
}) {
  return (
    <Box className="min-h-screen relative w-1/2">
      <Image src={asset} alt="hero-bg" className="absolute z-0" fill />
      <Box className="absolute w-full h-full flex items-end px-40 pb-40 ">
        <Typography className={"text-pandan"} variant="h1">{title}</Typography>
      </Box>
    </Box>
  );
}

// SETUP TYPOGRAPHY FONT FIRST
// TAILWIND COLOR PALETTE
