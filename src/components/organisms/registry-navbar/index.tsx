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
    id: "registry",
    title: "Tentukan Acara",
    href: "",
  },
  {
    id: "events",
    title: "Pilih Hadiah",
    href: "",
  },
  {
    id: "design-registry",
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
    <Box className="fixed z-50 bg-white w-full pt-9">
      <Box className="grid  items-center grid-cols-6 gap-x-10 gap-y-3">
        <Box className="col-span-1">
          <Image src={KamalanLogoGreen} alt="kamalan-logo" />
        </Box>
        <Box className="col-span-4">
        <Breadcrumb currentPage="registry" crumbs={breadcrumb} />
        </Box>
      </Box>
    </Box>
  );
}
