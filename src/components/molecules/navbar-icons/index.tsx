import CButton from "@/components/atoms/button";
import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function NavbarIcons({
  items,
}: {
  items: Array<{
    icon: StaticImageData;
    onClick: () => void
  }>;
}) {
  return (
    <Box className="flex mr-3 gap-x-4">
      {items.map((icon, idx) => (
        <CButton onClick={icon.onClick} styleType="link" key={`icon-${idx}`}>
          <Image src={icon.icon} alt={`icon-${idx}`} />
        </CButton>
      ))}
    </Box>
  );
}
