import { Box } from "@mui/material";

import RegistryNavbar from "@/components/organisms/registry-navbar";

export default function RegistryLayout({
  children,
  showBreadcrumb
}: {
  children: React.ReactNode;
  showBreadcrumb?: boolean
}) {
  return (
    <Box className="grid w-full gap-y-4">
      <RegistryNavbar showBreadcrumb={showBreadcrumb} />
      <Box className="px-20 2xl:px-32">
        <Box className="mt-[132px]">{children}</Box>
      </Box>
    </Box>
  );
}
