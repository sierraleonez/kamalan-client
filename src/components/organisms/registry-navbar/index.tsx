import Breadcrumb from "@/components/molecules/breadcrumb";
import { Box } from "@mui/material";
import Image from "next/image";

import KamalanLogoGreen from "assets/kamalan_logo_green.svg";
import Link from "next/link";

import { NavbarIconClient } from "./client-wrapper";

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
    href: "/registry/event",
  },
  {
    id: "product",
    title: "Pilih Hadiah",
    href: "registry/",
  },
  {
    id: "design",
    title: "Desain Registry",
    href: "/registry/design",
  },
  {
    id: "form",
    title: "Lengkapi Data",
    href: "/registry/form",
  },
  {
    id: "share",
    title: "Bagikan Registry",
    href: "/registry/share",
  },
];

export default function RegistryNavbar({
  showBreadcrumb = true,
}: {
  showBreadcrumb?: boolean;
}) {
  return (
    <Box className="fixed z-50 bg-white pt-9 px-32 pb-4 w-full">
      <Box className="grid  items-center grid-cols-6 gap-x-10 gap-y-3">
        <Box className="col-span-1">
          <Link href={"/"}>
            <Image src={KamalanLogoGreen} alt="kamalan-logo" />
          </Link>
        </Box>
        <Box className="col-span-4 justify-self-center">
          {showBreadcrumb && <Breadcrumb crumbs={breadcrumb} />}
        </Box>
        <NavbarIconClient/>
      </Box>
    </Box>
  );
}
