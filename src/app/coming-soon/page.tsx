import { Box } from "@mui/material";
import Image from "next/image";

import coming_soon_bg from 'assets/coming-soon.jpg'

export default function ComingSoong() {
  return (
    <Box className="w-full h-full">
      <Image priority src={coming_soon_bg} fill alt="coming-soon"/>
    </Box>
  )
}