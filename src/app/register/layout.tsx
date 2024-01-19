import RegistryLayout from "@/components/layout/registry";
import React from "react";

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return (
    <RegistryLayout showBreadcrumb={false}>
      {children}
    </RegistryLayout>
  )
}