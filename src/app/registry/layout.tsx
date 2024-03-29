import { Box } from "@mui/material";

import RegistryNavbar from "@/components/organisms/registry-navbar";

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
