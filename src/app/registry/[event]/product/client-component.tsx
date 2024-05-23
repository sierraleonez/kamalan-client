"use client"
import CButton from "@/components/atoms/button";
import Text from "@/components/atoms/text";
import { mergeClass } from "@/utils/styling/tw-merge";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface iCategory {
  label: string;
  value: string;
  icon: StaticImageData | string;
}

export function CategoryItem({ item, onClick, active }: { item: iCategory; onClick: () => void; active: boolean }) {
  const activeClass = { container: "bg-wortel", label: "text-kemiri" }
  const inactiveClass = { container: "border-seledri border border-solid", label: "text-seledri" }
  const conditionalStyle = active ? activeClass : inactiveClass
  return (
    <CButton onClick={onClick} styleType="link">
      <Box className={mergeClass("flex px-3 py-1 items-center gap-x-2", conditionalStyle.container)}>
        <Image src={item.icon} alt={item.label} />
        <Text className={conditionalStyle.label} >{item.label}</Text>
      </Box>

    </CButton>
  )
}

export function CategoryBox({ categories }: { categories: Array<iCategory> }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  return (
    <Box className="flex gap-x-3 items-center justify-center flex-wrap gap-y-3">
      {
        categories.map(item => (
          <CategoryItem key={item.label} onClick={() => { setSelectedCategory(item.value) }} item={item} active={selectedCategory === item.value} />
        ))
      }
    </Box>
  )
}

export function SortBox() {
  return (
    <FormControl fullWidth>
      <InputLabel id="sort">Urutkan Berdasarkan</InputLabel>
      <Select id="sort-select" labelId="sort" fullWidth sx={{ "& .MuiOutlinedInput-input": { py: '6px' } }}>
        {
          [{ label: "Entry Terkini", value: "latest" }, { label: "Entry Terdini", value: "earliest" }, { label: "Harga Terendah", value: "lowest_price" }, { label: "Harga Tertinggi", value: "highest_price" }]
            .map(item => (
              <MenuItem
                key={item.value}
                value={item.value}
              >
                {item.label}
              </MenuItem>
            ))
        }
      </Select>
    </FormControl>
  )
}