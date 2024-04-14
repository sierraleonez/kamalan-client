"use client"
import RegistryCard from "@/components/organisms/registry-share-card";

import { useAppSelector } from "@/lib/hooks";
import { useGetRegistryDetailQuery } from "@/lib/services/registries";
export default function RegistryShareCard() {
  const registryId = useAppSelector(state => state.registryCreation.registry.id)
  const { data: registryDetail } = useGetRegistryDetailQuery(registryId)
  const registry = registryDetail?.data
  // const registry = useAppSelector(state => state.registryCreation)
  return (
    <RegistryCard registry={{
      bgUrl: registry?.event.asset_url || "",
      date: registry?.event_date || "",
      greeting: registry?.message || "",
      products: registry?.productVariation?.length ? registry?.productVariation?.map((product) => ({ link: product.id, name: product.product.name })) : [],
      registryName: registry?.name || "",
      userImageUrl: registry?.user_asset_url || "",
      username: registry?.user.name || ""
    }} />
  )
}