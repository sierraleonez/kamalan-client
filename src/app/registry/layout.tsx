import { Box } from "@mui/material";

import RegistryNavbar from "@/components/organisms/registry-navbar";

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
export default function RegistryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box className="grid w-full gap-y-4">
      <RegistryNavbar />
      <Box className="px-20 2xl:px-32">
        <Box className="mt-[132px]">{children}</Box>
      </Box>
    </Box>
  );
}
