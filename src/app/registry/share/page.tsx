import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import user_image from "assets/design-bg/share/user-image.jpg";
import green_bg from "assets/design-bg/share/green.jpg";
import Link from "next/link";

import copy_icon from 'assets/utility/copy.svg'
import { useAppSelector } from "@/lib/hooks";
import RegistryShareCard from "@/components/client-wrapper/registry-share-card";

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

// function RegistryCard({ registry }: { registry: iRegistry }) {
//   return (
//     <Box>
//       <Image
//         src={registry.userImageUrl}
//         className="w-full z-0"
//         placeholder="blur"
//         alt="user-image"
//       />
//       <Box className="relative grid grid-cols-8 h-[941px]">
//         <Image
//           src={registry.bgUrl}
//           alt="registry-bg"
//           className="absolute"
//           priority
//         />
//         <Box className="flex flex-col gap-y-12 items-center text-center col-start-3 col-span-4 z-10 pt-20">
//           <Box className="flex flex-col items-center gap-y-4">
//             <p className="text-5xl text-white">{registry.registryName}</p>
//             <Box className="px-4 py-1 w-fit bg-kunyit text-white">
//               <p>{registry.date}</p>
//             </Box>
//           </Box>

//           <Box className="flex flex-col items-center gap-y-4">
//             <p className="text-lg text-gula">{registry.greeting}</p>
//             <Box className="flex items-center">
//               <Box className="bg-seledri h-[2px] w-5" />
//               <p className="text-seledri text-2xl">{registry.username}</p>
//               <Box className="bg-seledri h-[2px] w-5" />
//             </Box>
//           </Box>

//           <Box className="bg-salam h-[2px] w-full" />

//           <p className="text-susu">
//             Beberapa hadiah yang kan menyenangkan hati:
//           </p>

//           <Box className="grid grid-cols-4">
//             {registry.products.map((product, idx) => (
//               <Link
//                 key={product.name + idx}
//                 className="text-start font-serif col-start-2 col-span-2 grid grid-cols-4 items-center gap-x-4"
//                 href={product.link}
//                 target="_blank"
//               >
//                 <p className="text-kunyit text-6xl h-fit col-span-1 min-h-[64px]">
//                   {idx + 1}
//                 </p>
//                 <p className="text-kemiri text-xl w-full h-fit col-span-3">
//                   {product.name}
//                 </p>
//               </Link>
//             ))}
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }
