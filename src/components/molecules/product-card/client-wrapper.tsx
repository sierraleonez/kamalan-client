"use client";
import { openProductDetailModal } from "@/lib/features/global/modalSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useLazyGetDetailProductQuery } from "@/lib/services/products";
import { iProduct } from "@/types";
import { Box } from "@mui/material";

export default function ProductCardClientWrapper({
  children,
  product,
}: {
  children: React.ReactNode;
  product: iProduct;
}) {
  const [getProductDetail] = useLazyGetDetailProductQuery()
  const dispatch = useAppDispatch();
  return (
    <Box
      onClick={async () => {
        const res = await getProductDetail(product.id, true).unwrap()
        const defaultVariation = res.productVariations[0].id
        dispatch(openProductDetailModal({ product, variant: defaultVariation }));
      }}
    >
      {children}
    </Box>
  );
}
