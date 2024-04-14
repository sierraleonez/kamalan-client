"use client"

import { useAppSelector } from "@/lib/hooks";
import ProductDetailModal from ".";

// Force re render on change product
export default function ProductDetailModalClient() {
  const { id } = useAppSelector(state => state.modal.productDetail.props)
  return (
    <ProductDetailModal key={id} />
  )
}