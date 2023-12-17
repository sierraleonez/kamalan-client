"use client";

import { Box } from "@mui/material";
import Image from "next/image";

import green_love from "assets/love.svg";
import RegistryCartTitle from "@/components/atoms/registry-cart-title";
import Text from "@/components/atoms/text";
import plus_outline_pandan from "assets/utility/plus-pandan-outline.svg";
import minus_outline_gula from "assets/utility/minus-gula-outline.svg";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { iProduct } from "@/types";
import {
  decreaseQtyProductCartRegistry,
  increaseQtyProductCartRegistry,
  removeProductFromCartRegistry,
} from "@/lib/features/registry/registryCreationSlice";

export default function ProductCart() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(
    (state) => state.registryCreation.selectedProducts
  );
  const isCartEmpty = products.length === 0;

  function onClickDelete(productId: string) {
    dispatch(removeProductFromCartRegistry(productId));
  }

  function onIncrement(productId: string) {
    dispatch(increaseQtyProductCartRegistry(productId));
  }

  function onDecrement(productId: string) {
    dispatch(decreaseQtyProductCartRegistry(productId));
  }
  return (
    <Box className="grid max-w-[242px] gap-y-3 fixed">
      <RegistryCartTitle />
      <Box className="p-3 border-seledri border min-h-[600px] w-full gap-y-2">
        {isCartEmpty ? (
          <CartEmptyState />
        ) : (
          <Box className="grid gap-y-3">
            {products.map((product) => (
              <CartItem
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onClickDelete={onClickDelete}
                key={product.product.name}
                product={product.product}
                qty={product.qty}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}

function CartEmptyState() {
  return (
    <Box className="h-full px-3 border border-dashed border-gula flex flex-col gap-y-2 justify-center items-center">
      <Image src={green_love} alt="green_love" width={60} />
      <Text
        variant="copy"
        size="tiny"
        className="text-kluwak text-center font-light"
      >
        <i>Hadiah yang telah kamu pilih akan muncul di daftar ini!</i>
      </Text>
    </Box>
  );
}

function CartItem({
  product,
  qty,
  onClickDelete,
  onIncrement,
  onDecrement,
}: {
  product: iProduct;
  qty: number;
  onClickDelete: (productId: string) => void;
  onIncrement: (productId: string) => void;
  onDecrement: (productId: string) => void;
}) {
  return (
    <Box className="w-full pb-3 border-b border-gula last:border-b-0">
      <Box className="flex flex-col gap-y-1">
        <Box className="flex items-center gap-x-2">
          <Image
            src={product.asset}
            width={60}
            height={60}
            alt="product_image"
          />
          <Text size="micro">{product.title}</Text>
        </Box>
        <Box className="flex items-center gap-x-2">
          <Box
            onClick={() => onClickDelete(product.name)}
            className="w-[60px] flex justify-center hover:bg-wortel text-gula hover:text-white py-1 cursor-pointer"
          >
            <Text size="micro">Hapus</Text>
          </Box>
          <Box className="flex gap-x-3 items-center">
            <Box
              className="cursor-pointer"
              onClick={() => onDecrement(product.name)}
            >
              <Image src={minus_outline_gula} alt="minus_icon" />
            </Box>
            <Text size="tiny">{qty}</Text>
            <Box
              className="cursor-pointer"
              onClick={() => onIncrement(product.name)}
            >
              <Image src={plus_outline_pandan} alt="plus_icon" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
