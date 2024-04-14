"use client"

import ProductCard from "@/components/molecules/product-card"
import { useAppSelector } from "@/lib/hooks"
import { useGetProductsQuery } from "@/lib/services/products"
import { RegistriesApi } from "@/lib/services/registries"
import { Box } from "@mui/material"
import { useMemo } from "react"

export default function ClientProductList({ eventId }: { eventId: string }) {
  const { id: registryId } = useAppSelector(state => state.registryCreation.registry)
  const { data: p } = useGetProductsQuery({ event_id: eventId })
  const { data: cartItems } = RegistriesApi.endpoints.getCartItems.useQueryState(registryId)
  
  let products = p?.data

  const cartKey = useMemo(() => {
    return cartItems?.reduce((acc, val) => ({ ...acc, [val.product_id]: true  }), {}) as { [key: string]: boolean }
  }, [cartItems])

  const mappedProducts = useMemo(() => {
    return products?.map(product => ({
      ...product,
      hasBeenAdded: !!cartKey?.[product.id]
    }))

  }, [products, cartKey])
  
  return (
    <Box className="grid grid-cols-3 gap-x-5 gap-y-5">
      {mappedProducts?.map((product, idx) => (
        <ProductCard product={product} key={product.name + "-" + idx} />
      ))}
    </Box>
  )
}