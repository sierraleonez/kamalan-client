import { Box } from "@mui/material";
import Image from "next/image";

const love_thumbnail = "/static/asset/love.svg";

type BoxPosition = "l" | "r";

export default function SmallBorderGiftBox({
  children,
  position,
}: {
  children?: React.ReactNode;
  position: BoxPosition;
}) {
  return (
    <Box
      borderLeft={position === "l" ? 3 : 0}
      borderRight={position === "r" ? 3 : 0}
      className={
        "w-2/5 h-[480px] border-y-[3px] border-seledri relative flex items-center justify-center px-16"
      }
    >
      <Image
        src={love_thumbnail}
        alt="love_thumbnail"
        width={92}
        height={81}
        className="absolute left-1/2 -top-[70px]"
      />
      {children}
    </Box>
  );
}
