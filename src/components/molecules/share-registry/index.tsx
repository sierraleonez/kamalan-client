"use client"

import CButton from "@/components/atoms/button"
import Text from "@/components/atoms/text"
import { Box } from "@mui/material"
import Image from "next/image"

const SHARE_REGISTRY_OPTIONS = [
  {
    icon: require('assets/social-media-icon/whatsapp.png'),
    onClick: (registryId: string) => '',
    id: 'whatsapp'
  },
  {
    icon: require('assets/social-media-icon/gmail.png'),
    onClick: (registryId: string) => '',
    id: 'gmail'
  },
  {
    icon: require('assets/social-media-icon/telegram.png'),
    onClick: (registryId: string) => '',
    id: 'telegram'
  },
]
export default function ShareRegistrySection() {
  return (
    <Box className="flex flex-col items-center gap-y-5">
      <Text size="micro" variant="title" className="text-pandan">
        Bagikan Registry
      </Text>
      <Box className="flex gap-x-10">
        {
          SHARE_REGISTRY_OPTIONS.map(option => (
            <CButton styleType="link">
              <Image src={option.icon} alt={option.id} />
            </CButton>
          ))
        }
      </Box>
    </Box>
  )
}