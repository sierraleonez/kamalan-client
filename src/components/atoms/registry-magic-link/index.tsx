"use client"

import { Box } from "@mui/material"
import Text from "../text"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import CButton from "../button"
import { openToast } from "@/lib/features/global/toastSlice"

export default function RegistryMagicLink() {
  const registry_id = useAppSelector(state => state.registryCreation.registry.id)
  const magicLink = `https://kamalan.id/registry/link/${registry_id}`
  const dispatch = useAppDispatch()

  function copyToClipboard(link: string) {
    try {
      navigator.clipboard.writeText(link)
      dispatch(openToast({ message: 'Magic Link disalin!', type: 'success' }))
    } catch {
      dispatch(openToast({ message: 'Gagal menyalin Magic Link', type: 'error' }))
    }
  }
  return (
    <>
      <Box className="w-fit border-gula border-[2px] px-3 py-1">
        <Text className="font-bold">{magicLink}</Text>
      </Box>
      <CButton onClick={() => copyToClipboard(magicLink)} className="bg-seledri">
        <Text>Salin Tautan</Text>
      </CButton>
    </>
  )
}

export function RegistryMagicLinkRow() {
  const registry_id = useAppSelector(state => state.registryCreation.registry.id)
  const magicLink = `https://kamalan.id/registry/link/${registry_id}`
  const dispatch = useAppDispatch()

  function copyToClipboard(link: string) {
    try {
      navigator.clipboard.writeText(link)
      dispatch(openToast({ message: 'Magic Link disalin!', type: 'success' }))
    } catch {
      dispatch(openToast({ message: 'Gagal menyalin Magic Link', type: 'error' }))
    }
  }
  return (
    <Box className="w-full grid grid-cols-5">
      <Box className="bg-white px-4 py-2 w-full col-span-4">
        <Text variant="copy" className="text-sm">{magicLink}</Text>
      </Box>
      <Box onClick={() => copyToClipboard(magicLink)} className="col-span-1 bg-seledri px-2 py-2 hover:cursor-pointer">
        <Text className="text-sm text-white font-bold">Salin Tautan</Text>
      </Box>
    </Box>
  )
}