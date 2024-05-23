import Text from "@/components/atoms/text";
import { Box } from "@mui/material";
import dayjs from "dayjs";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import kamalan_white_icon from 'assets/kamalan_icon_green.svg'
import { RegistryMagicLinkRow } from "@/components/atoms/registry-magic-link";

type iProductDisplay = {
  name: string;
  link: string;
};

type iRegistry = {
  id: string;
  bgUrl: StaticImageData | string;
  userImageUrl: StaticImageData | string;
  registryName: string;
  username: string;
  date: string;
  greeting: string;
  products: Array<iProductDisplay>;
};
export default function RegistryCard({ registry }: { registry: iRegistry }) {
  return (
    <Box>
      <Image
        src={registry.userImageUrl}
        className="w-full z-0 h-64"
        width={1920}
        height={1080}
        alt="user-image"
      />
      <Box className="relative grid grid-cols-8 h-[941px]">
        <Image
          src={registry.bgUrl}
          alt="registry-bg"
          className="absolute"
          width={1920}
          height={1080}
          priority
        />
        <Box className="flex flex-col gap-y-12 items-center text-center col-start-3 col-span-4 z-10 pt-20">
          <Box className="flex flex-col items-center gap-y-4">
            <p className="text-5xl text-white">{registry.registryName}</p>
            <Box className="px-4 py-1 w-fit bg-kunyit text-white">
              <p>{dayjs(registry.date).format('DD-MM-YYYY')}</p>
            </Box>
          </Box>

          <Box className="flex flex-col items-center gap-y-4">
            <p className="text-lg text-gula">{registry.greeting}</p>
            <Box className="flex items-center">
              <Box className="bg-seledri h-[2px] w-5" />
              <p className="text-seledri text-2xl">{registry.username}</p>
              <Box className="bg-seledri h-[2px] w-5" />
            </Box>
          </Box>

          <Box className="bg-salam h-[1px] w-full" />

          <p className="text-susu">
            Beberapa hadiah yang kan menyenangkan hati:
          </p>

          <Box className="grid grid-cols-4">
            {registry.products.map((product, idx) => (
              <Link
                key={product.name + idx}
                className="text-start font-serif col-start-2 col-span-2 grid grid-cols-4 items-center gap-x-4"
                href={product.link}
                target="_blank"
              >
                <p className="text-kunyit text-6xl h-fit col-span-1 min-h-[64px]">
                  {idx + 1}
                </p>
                <p className="text-kemiri text-xl w-full h-fit col-span-3">
                  {product.name}
                </p>
              </Link>
            ))}
          </Box>

          <Box className="bg-salam h-[1px] w-full" />

          <Box className="flex flex-col gap-y-8 items-center">
            <Text className="text-white font-bold">Bagikan Registry ini ke teman kalian!</Text>
            <RegistryMagicLinkRow/>
            <Image
              src={kamalan_white_icon}
              alt="icon"
              className="mt-10"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}