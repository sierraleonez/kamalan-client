import { Box } from "@mui/material";
import Image from "next/image";


import KamalanLogoGreen from "../../../public/static/asset/kamalan_logo_green.svg";
import Breadcrumb from "@/components/molecules/breadcrumb";

type iBreadcrumbStep = {
  id: string
  title: string
  href: string
}

type BreadcrumbEntries = Array<iBreadcrumbStep>
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
export default function RegistryLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Box className="grid w-full gap-y-4">
      <Box className="fixed max-w-[1649px] z-50 bg-white w-full pt-9">
        <Box className="flex flex-col items-center gap-y-3">
        <Box>
          <Image src={KamalanLogoGreen} alt="kamalan-logo" />
        </Box>
        <Breadcrumb crumbs={breadcrumb}/>
          
        </Box>
      </Box>
      <Box className="mt-40 px-32">
        {children}
      </Box>
    </Box>
  );
}
