"use client";
import { Box } from "@mui/material";
import Text from "@/components/atoms/text";
import { twMerge } from "tailwind-merge";
import { useAppDispatch } from "@/lib/hooks";
import { setVariantProductDetailModal } from "@/lib/features/global/modalSlice";

export default function VariantItem({
  item,
  isSelected,
}: {
  item: { label: string; value: string };
  isSelected: boolean;
}) {
  const activeClass = "border-seledri bg-seledri";
  const dispatch = useAppDispatch();
  return (
    <Box
      onClick={() => dispatch(setVariantProductDetailModal(item.value))}
      key={item.value}
      className={twMerge(
        "px-8 py-2 border border-gula hover:border-pandan pointer-events-auto",
        isSelected ? activeClass : ""
      )}
    >
      <Text
        variant="copy"
        size="tiny"
        className={twMerge(isSelected ? "text-white" : "text-pandan")}
      >
        {item.label}
      </Text>
    </Box>
  );
}
