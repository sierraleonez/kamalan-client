import CButton from "@/components/atoms/button";
import { Box, InputBase, Switch, TextField } from "@mui/material";
import { HTMLInputTypeAttribute } from "react";

export default function RegistryForm() {
  return (
    <Box className="grid grid-cols-2 gap-x-10 pb-10">
      <Box className="flex flex-col gap-y-4">
        <Box className="w-full h-80 bg-gula"></Box>

        <p className="text-6xl text-pandan">Mawar&apos;s Wedding Registry</p>

        <Box className="w-full h-1 bg-kunyit" />

        <Box className="flex w-full">
          <Box>
            <PrivacySwitch />
            <p>Registry-mu hanya terlihat oleh orang yang kamu pilih</p>
          </Box>

          <TextAreaWithLabel label="Kata Sambutan" />
        </Box>
      </Box>
      <Box className="flex flex-col gap-y-7">
        <RightForm/>
        <CButton>Buat Registry</CButton>
      </Box>
    </Box>
  );
}

function RightForm() {
  return (
    <Box className="grid grid-cols-6 gap-x-5 gap-y-5">
      <Box className="col-start-1 col-span-2">
        <InputWithLabel type="date" label="Tanggal Acara"/>
      </Box>

      <Box className="col-start-1 col-span-3">
        <InputWithLabel label="Nama Pemilik Acara"/>
      </Box>

      <Box className="col-start-1 col-span-4">
        <InputWithLabel type="email" label="Email"/>
      </Box>

      <Box className="col-start-1 col-span-5">
        <InputWithLabel type="tel" label="Telepon"/>
      </Box>

      <Box className="col-start-1 col-span-6">
        <TextAreaWithLabel label="Alamat Rumah"/>
      </Box>

      <Box className="col-span-3">
        <InputWithLabel label="Provinsi"/>
      </Box>

      <Box className="col-span-3">
        <InputWithLabel label="Kota"/>
      </Box>

      <Box className="col-span-2">
        <InputWithLabel label="Kelurahan"/>
      </Box>

      <Box className="col-span-2">
        <InputWithLabel label="Kecamatan"/>
      </Box>

      <Box className="col-span-2">
        <InputWithLabel type="number" label="Kode Pos"/>
      </Box>
    </Box>
  )
}

function InputWithLabel({ label, type = "text" }: { label: string, type?: HTMLInputTypeAttribute }) {
  return (
    <Box className="w-full flex flex-col gap-y-1">
      <p>{label}</p>
      <TextField type={type} className="w-full"/>
    </Box>
  )
}

function TextAreaWithLabel({ label }: { label: string }) {
  return (
    <Box className="w-full flex flex-col gap-y-1">
      <p>{label}</p>
      <Box className="border border-pandan px-6 py-2 h-28 overflow-scroll">
        <InputBase className="w-full" multiline />
      </Box>
    </Box>
  );
}

function PrivacySwitch() {
  return (
    <Box className="grid grid-cols-3">
      <p>Privat</p>
      <Switch />
      <p>Publik</p>
    </Box>
  );
}
