"use client";
import { Box } from "@mui/material";
import Image from "next/image";

import arrow_green from "assets/utility/arrow-green.svg";
import Text from "../text";
import { mergeClass } from "@/utils/styling/tw-merge";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const isCurrentPage = pathname.includes(id);

  const containerActiveClass = "px-5 py-1 bg-seledri text-white";
  return (
    <Box key={id} className={"flex gap-x-2 justify-center items-center"}>
      <Text
        size="small"
        variant="copy"
        className={mergeClass(
          "text-gula",
          isCurrentPage ? containerActiveClass : ""
        )}
      >
        {title}
      </Text>
      {isArrowShown && <Image src={arrow_green} alt="arrow-green" />}
    </Box>
  );
}
