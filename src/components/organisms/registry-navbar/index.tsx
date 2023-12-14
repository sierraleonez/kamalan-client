import Breadcrumb from "@/components/molecules/breadcrumb";
import { Box } from "@mui/material";
import Image from "next/image";

import KamalanLogoGreen from "assets/kamalan_logo_green.svg";

type iBreadcrumbStep = {
  id: string;
  title: string;
  href: string;
};

type BreadcrumbEntries = Array<iBreadcrumbStep>;
const breadcrumb: BreadcrumbEntries = [
  {
    id: "event",
    title: "Tentukan Acara",
    href: "",
  },
  {
    id: "product",
    title: "Pilih Hadiah",
    href: "",
  },
  {
    id: "design",
    title: "Desain Registry",
    href: "",
  },
  {
    id: "form",
    title: "Lengkapi Data",
    href: "",
  },
  {
    id: "share",
    title: "Bagikan Registry",
    href: "",
  },
];

export default function RegistryNavbar() {
  return (
    <Box className="fixed z-50 bg-white pt-9 px-32 pb-4 w-full">
      <Box className="grid  items-center grid-cols-6 gap-x-10 gap-y-3">
        <Box className="col-span-1">
          <Image src={KamalanLogoGreen} alt="kamalan-logo" />
        </Box>
        <Box className="col-span-4 justify-self-center">
          <Breadcrumb crumbs={breadcrumb} />
        </Box>
      </Box>
    </Box>
  );
}
