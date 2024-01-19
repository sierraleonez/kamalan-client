"use client"
import { Box, Dialog } from "@mui/material";

export default function DialogOuter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dialog open={false} className="flex items-center justify-center">
      <Box className="bg-white px-8 w-[30rem] flex flex-col gap-y-12 pt-4 pb-12 items-center">
        {children}
      </Box>
    </Dialog>
  );
}
