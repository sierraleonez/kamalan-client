"use client"
import RegistryCard from "@/components/organisms/registry-share-card";
import { useAppSelector } from "@/lib/hooks";

import { useGetRegistryDetailQuery } from "@/lib/services/registries";
export default function RegistryShareCard({ registryId }: { registryId?: string }) {
  const id = useAppSelector(state => state.registryCreation.registry.id)
  const { data: registryDetail } = useGetRegistryDetailQuery(registryId || id)
  const registry = registryDetail?.data
  return (
    <RegistryCard registry={{
      id: String(registryId),
      bgUrl: registry?.event.asset_url || "",
      date: registry?.event_date || "",
      greeting: registry?.message || "",
      products: registry?.product_variation?.length ? registry?.product_variation?.map((product) => ({ link: product.id, name: product.product.name })) : [],
      registryName: registry?.name || "",
      userImageUrl: registry?.user_asset_url || "",
      username: registry?.user.name || ""
    }} />
  )
}