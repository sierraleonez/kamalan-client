"use client"
import MuiTransition from "@/components/atoms/mui-transition";
import { Box, Dialog } from "@mui/material";

interface iDialogOuterProps {
  open: boolean;
  children: React.ReactNode;
  onClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void
}

export default function DialogOuter({
  children,
  open,
  onClose
}: iDialogOuterProps) {
  return (
    <Dialog onClose={onClose} TransitionComponent={MuiTransition} open={open} className="flex items-center justify-center">
      <Box className="bg-white px-8 w-[30rem] flex flex-col gap-y-12 pt-4 pb-12 items-center">
        {children}
      </Box>
    </Dialog>
  );
}
