
import { Box } from "@mui/material";
import { StaticImageData } from "next/image";


import RegistryShareCard from "@/components/client-wrapper/registry-share-card";
import Text from "@/components/atoms/text";
import RegistryMagicLink from "@/components/atoms/registry-magic-link";
import ShareRegistrySection from "@/components/molecules/share-registry";

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

export default function ShareRegistry() {

  return (
    <Box className="w-full grid grid-cols-6 gap-y-20 py-20 gap-x-10">
      <Box className="col-start-2 col-span-4 flex flex-col gap-y-20">
        <p className="text-6xl text-pandan text-center">
          Bagikan Kebahagiaan
        </p>
      </Box>
      <Box className="col-start-2 col-span-2">
        <RegistryShareCard />
      </Box>
      <Box className="col-start-4 col-span-2 flex flex-col gap-y-5 items-center">
        <Text size="micro" variant="title" className="text-pandan">
          Registry milikmu sempurna dibuat!
        </Text>
        <Text className="text-center" size="macro">
          Share ke teman-temanmu melalui sosial media yang kamu inginkan atau
          salin tautan jika ingin mengirimkan secara manual
        </Text>
        <RegistryMagicLink />
        <ShareRegistrySection />
      </Box>


    </Box>
  );
}