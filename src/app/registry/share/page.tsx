"use client"
import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import user_image from "assets/design-bg/share/user-image.jpg";
import green_bg from "assets/design-bg/share/green.jpg";

import copy_icon from 'assets/utility/copy.svg'
import RegistryShareCard from "@/components/client-wrapper/registry-share-card";
import { useGetRegistryDetailQuery } from "@/lib/services/registries";
import { useAppSelector } from "@/lib/hooks";

type iProductDisplay = {
  name: string;
  link: string;
};

type iRegistry = {
  bgUrl: StaticImageData | string;
  userImageUrl: StaticImageData | string;
  registryName: string;
  username: string;
  date: string;
  greeting: string;
  products: Array<iProductDisplay>;
};

const MOCK_REGISTRY: iRegistry = {
  bgUrl: green_bg,
  userImageUrl: user_image,
  date: "13 Desember 2023",
  greeting:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quis excepturi dolorem earum rem illum quae numquam, facere iusto possimus?",
  products: [
    {
      name: "Nusantara Foliage Motive Tableware",
      link: "http://localhost:3003/registry/wedding/12345",
    },
    {
      name: "Toilet Aesthetic Compartment",
      link: "http://localhost:3003/registry/wedding/12345",
    },
    {
      name: "Seperangkat Kenangan",
      link: "http://localhost:3003/registry/wedding/12345",
    },
    {
      name: "Bantal Ayam",
      link: "http://localhost:3003/registry/wedding/12345",
    },
  ],
  registryName: "Test Wedding Registry",
  username: "Tester",
};

export default function ShareRegistry() {
  const registryId = useAppSelector(state => state.registryCreation.registry.id)
  const { data: registryDetail } = useGetRegistryDetailQuery(registryId)
  console.log(registryDetail)
  return (
    <Box className="w-full grid grid-cols-6 gap-y-20 py-20">
      <Box className="col-start-2 col-span-4 flex flex-col gap-y-20">
        <p className="text-6xl text-pandan text-center">
          Registry Siap Dikirim!
        </p>
        <RegistryShareCard/>
      </Box>
      <Box className="col-start-3 col-span-2 text-center flex flex-col gap-y-4">
        <p className="text-2xl text-pandan font-sans-serif">
          Registry milikmu sempurna dibuat!
        </p>
        <p className="font-serif">
          Share ke teman-temanmu melalui sosial media yang kamu inginkan atau
          salin tautan jika ingin mengirimkan secara manual
        </p>
      </Box>
      <Box className="col-start-2 col-span-2">
        <p>Salin Tautan</p>
        <Box className="flex h-12">
          <Box className="bg-pandan flex items-center justify-center w-12 h-full">
            <Image src={copy_icon} alt="copy-icon"/>
          </Box>
          <Box className="w-full border-pandan border-[2px]">

          </Box>
        </Box>
      </Box>
    </Box>
  );
}