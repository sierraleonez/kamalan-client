"use client";

import Text from "@/components/atoms/text";
import { useAppSelector } from "@/lib/hooks";

export default function RegistryCartTitle() {
  const registryName = useAppSelector((state) => state.registryCreation.name);
  return (
    <Text variant="title" size="micro" className="text-pandan text-center">
      {registryName}
    </Text>
  );
}
