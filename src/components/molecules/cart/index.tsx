import { Box, Typography } from "@mui/material";
import Image from "next/image";

import green_love from "assets/love.svg";

export default function ProductCart() {
  return (
    <Box className="grid max-w-[242px] gap-y-3 fixed">
      <Typography variant="h5" className="text-pandan text-center">
        Tulis nama Registry di sini!
      </Typography>
      <Box className="px-3 border-seledri border min-h-[600px] gap-y-2 flex flex-col justify-center items-center">
          <Image src={green_love} alt="green_love" />
          <Typography align="center">
            Hadiah yang telah kamu pilih akan muncul di daftar ini!
          </Typography>
      </Box>
    </Box>
  );
}