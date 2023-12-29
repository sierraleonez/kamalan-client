"use client"
import RegistryCard from "@/components/organisms/registry-share-card";


import { useAppSelector } from "@/lib/hooks";
export default function RegistryShareCard() {
  const registry = useAppSelector(state => state.registryCreation)
  return (
    <RegistryCard registry={{
      bgUrl: `/static/asset/design-bg/${registry.selectedDesign}.png`,
      date: registry.date,
      greeting: registry.greeting,
      products: registry.selectedProducts.map(({ product }) => ({ link: product.name, name: product.title })),
      registryName: registry.name,
      userImageUrl: registry.picture,
      username: registry.personalInformation.name
    }} />
  )
}