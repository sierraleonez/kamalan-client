"use client"

import { Box } from "@mui/material";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box onMouseEnter={e => console.log(e)}>
      {children}
    </Box>
  )
}