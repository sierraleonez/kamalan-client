import { Box, Typography } from "@mui/material";
import Image from "next/image";

import arrow_green from "assets/utility/arrow-green.svg";

type iBreadcrumbStep = {
  id: string;
  title: string;
  href: string;
  isArrowShown: boolean;
};

export default function BreadcrumbStep({
  id,
  title,
  isArrowShown,
}: iBreadcrumbStep) {
  return (
    <Box key={id} className="flex gap-x-2 justify-center items-center">
      <Typography variant="h6">{title}</Typography>
      {isArrowShown && <Image src={arrow_green} alt="arrow-green" />}
    </Box>
  );
}
