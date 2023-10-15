"use client";

import { Box } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";

export default function LinkWrapper({
  children,
  pushPath,
  rewritePath,
}: {
  children: React.ReactNode;
  pushPath?: string;
  rewritePath?: string
}) {
  const router = useRouter();
  const path = usePathname()

  const pushDest = `${path}/${pushPath}`
  const dest = rewritePath ?? pushDest
  function routerPush() {
    router.push(dest)
  }
  return (
    <Box className="hover:cursor-pointer" onClick={routerPush}>
      {children}
    </Box>
  );
}
