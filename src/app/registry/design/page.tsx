import ProductCart from "@/components/molecules/cart";
import { Box, Typography } from "@mui/material";

export default function DesignRegistry() {
  return (
    <Box className="grid grid-cols-6 gap-x-10 pb-10">
      <Box className="col-span-1">
        <RegistryDesignPickerField
          title="Desain Normal"
          priceTag="Gratis"
          items={[
            {
              label: "Kamalan Hijau",
              value: "green-kamalan"
            },
            {
              label: "Kamalan Putih",
              value: "white-kamalan"
            },
          ]}
        />
      </Box>
      <Box className="col-span-4">

      </Box>
      <Box className="col-span-1 relative">
        <ProductCart/>
      </Box>
    </Box>
  )
}

function RegistryDesignPickerField({ title, priceTag, items }: { title: string, priceTag: string, items: Array<{ label: string, value: string }> }) {
  return (
    <Box className="grid gap-y-2">
      <Box>
      <Typography variant="h4" className="text-pandan">{title}</Typography>
      <Typography fontFamily={'serif'} variant="h6" className="text-kunyit font-bold">{priceTag}</Typography>

      </Box>
      <Box className="grid gap-y-3">
        {items.map((item, idx) => (
          <RegistryDesignPickerItem key={`${item.label}-${idx}`} {...item}/>
        ))}
      </Box>
    </Box>
  )
}

function RegistryDesignPickerItem({ label, value }: { label: string, value: string }) {
  return (
    <Box className="w-full px-5 py-2 border border-pandan">
      {label}
    </Box>
  )
}