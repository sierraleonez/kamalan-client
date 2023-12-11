import { Box } from "@mui/material";
import Image from "next/image";
import Text from "../text";

import ornament_left from "assets/utility/ornament-left.svg";
import ornament_right from "assets/utility/ornament-right.svg";

export default function EventModalTitle({ children }: { children: React.ReactNode }) {
  return (
    <Box className="w-full flex justify-start">
      <Image src={ornament_left} alt="ornament_left" />
      <Text
        size="small"
        variant="title"
        className="text-pandan flex-1 text-center pt-14"
      >
        {children}
      </Text>
      <Image src={ornament_right} alt="ornament_right" />
    </Box>
  );
}
