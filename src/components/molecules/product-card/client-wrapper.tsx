"use client";
import { openProductDetailModal } from "@/lib/features/global/modalSlice";
import { useAppDispatch } from "@/lib/hooks";
import { iProduct } from "@/types";
import { Box } from "@mui/material";

export default function ProductCardClientWrapper({
  children,
  product,
}: {
  children: React.ReactNode;
  product: iProduct;
}) {
  const dispatch = useAppDispatch();
  return (
    <Box
      onClick={() => {
        dispatch(openProductDetailModal(product));
      }}
    >
      {children}
    </Box>
  );
}
