"use client";

import { Box, CircularProgress } from "@mui/material";
import Image from "next/image";

import green_love from "assets/love.svg";
import RegistryCartTitle from "@/components/atoms/registry-cart-title";
import Text from "@/components/atoms/text";
import plus_outline_pandan from "assets/utility/plus-pandan-outline.svg";
import minus_outline_gula from "assets/utility/minus-gula-outline.svg";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import CButton from "@/components/atoms/button";
import { useRouter } from "next/navigation";
import { useDeleteRegistryCartItemMutation, useGetCartItemsQuery, useUpdateCartItemMutation } from "@/lib/services/registries";
import { iRegistryCartItem } from "@/lib/services/type";

export default function ProductCart({ nextPath, onClick }: { nextPath?: string; onClick?: () => void }) {
  const router = useRouter()
  const [deleteItem, { isLoading: isDeleteItemLoading }] = useDeleteRegistryCartItemMutation()
  const [updateItem] = useUpdateCartItemMutation()
  const { registry } = useAppSelector(
    (state) => state.registryCreation
  );

  const { data: products } = useGetCartItemsQuery(registry.id)

  const isCartEmpty = products?.length === 0;

  async function onClickDelete(productId: string) {
    try {
      await deleteItem(productId).unwrap();
    } catch (err) {

    }
  }

  async function onIncrement(product: iRegistryCartItem) {
    const targetQty = product.current_qty + 1
    const stockQty = product.stock_qty
    if (targetQty < stockQty) {
      await updateItem({ params: product.id, body: { qty: targetQty } })
    }
  }

  async function onDecrement(product: iRegistryCartItem) {
    const targetQty = product.current_qty - 1
    if (targetQty > 0) {
      await updateItem({ params: product.id, body: { qty: targetQty } })
    }
  }

  return (
    <Box className="grid w-[180px] 2xl:w-[242px] gap-y-3 fixed">
      <RegistryCartTitle />
      <Box
        className="p-3 w-inherit border-seledri border min-h-[400px] 2xl:min-h-[600px] gap-y-2"
      >
        {isCartEmpty ? (
          <CartEmptyState />
        ) : (
          <Box className="grid gap-y-3  ">
            {products?.map((product) => (
              <CartItem
                isDeleteItemLoading={isDeleteItemLoading}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onClickDelete={onClickDelete}
                key={product.id}
                product={product}
                qty={product.current_qty}
              />
            ))}
          </Box>
        )}
      </Box>
      <CButton className="py-1 text-lg px-0 w-full" onClick={() => {
        if (nextPath) {
          router.push(nextPath)
        } else if (typeof onClick === 'function') {
          onClick()
        }
      }}>Selesai Pilih</CButton>
    </Box>
  );
}

function CartEmptyState() {
  return (
    <Box className="h-full px-3 border border-dashed border-gula flex flex-col gap-y-2 justify-center items-center  ">
      <Image src={green_love} alt="green_love" width={60} />
      <Text
        variant="copy"
        size="tiny"
        className="text-kluwak text-center font-light  "
      >
        <i>Hadiah yang telah kamu pilih akan muncul di daftar ini!</i>
      </Text>
    </Box>
  );
}

function CartItem(productData: {
  product: iRegistryCartItem;
  qty: number;
  onClickDelete: (productId: string) => void;
  onIncrement: (product: iRegistryCartItem) => void;
  onDecrement: (product: iRegistryCartItem) => void;
  isDeleteItemLoading: boolean;
}) {
  const {
    product,
    qty,
    onClickDelete,
    onIncrement,
    onDecrement,
    isDeleteItemLoading
  } = productData
  return (
    <Box className="w-full pb-3 border-b border-gula last:border-b-0  ">
      <Box className="flex flex-col gap-y-1">
        <Box className="flex items-center gap-x-2">
          <Image
            src={product.thumbnail_url}
            width={60}
            height={60}
            alt="product_image"
          />
          <Text size="micro">{product.name}</Text>
        </Box>
        <Box className="flex items-center gap-x-2">
          <Box
            onClick={() => onClickDelete(product.id)}
            className="w-[60px] flex justify-center hover:bg-wortel text-gula hover:text-white py-1 cursor-pointer"
          >
            {isDeleteItemLoading ? <CircularProgress size={10} color="secondary" /> : (
              <Text size="micro">Hapus</Text>

            )}
          </Box>
          <Box className="flex gap-x-3 items-center">
            <Box
              className="cursor-pointer"
              onClick={() => onDecrement(product)}
            >
              <Image src={minus_outline_gula} alt="minus_icon" />
            </Box>
            <Text size="tiny">{qty}</Text>
            <Box
              className="cursor-pointer"
              onClick={() => onIncrement(product)}
            >
              <Image src={plus_outline_pandan} alt="plus_icon" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
