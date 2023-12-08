import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function NavbarIcons({
  icons,
}: {
  icons: Array<StaticImageData>;
}) {
  return (
    <Box className="flex mr-3 gap-x-4">
      {icons.map((icon, idx) => (
        <Link href={"/"} key={`icon-${idx}`}>
          <Image src={icon} alt={`icon-${idx}`} />
        </Link>
      ))}
    </Box>
  );
}
