import { Box, Typography } from "@mui/material";
import Image from "next/image";

import green_love from "assets/love.svg";
import RegistryCartTitle from "@/components/atoms/registry-cart-title";
import Text from "@/components/atoms/text";

export default function ProductCart() {
  return (
    <Box className="grid max-w-[242px] gap-y-3 fixed">
      <RegistryCartTitle />
      <Box className="p-3 border-seledri border min-h-[600px] gap-y-2">
        <Box className="h-full px-3 border border-dashed border-gula flex flex-col gap-y-2 justify-center items-center">
          <Image src={green_love} alt="green_love" width={60} />
          <Text
            variant="copy"
            size="tiny"
            className="text-kluwak text-center font-light"
          >
            <i>Hadiah yang telah kamu pilih akan muncul di daftar ini!</i>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
