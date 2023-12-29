import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

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
export default function RegistryCard({ registry }: { registry: iRegistry }) {
  return (
    <Box>
      <Image
        src={registry.userImageUrl}
        className="w-full z-0"
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
              <p>{registry.date}</p>
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

          <Box className="bg-salam h-[2px] w-full" />

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
        </Box>
      </Box>
    </Box>
  );
}