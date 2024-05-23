"use client";

import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import registry_hero_bg_url from "assets/hero/registry.png";
import gift_hero_bg_url from "assets/hero/shop.png";
import gift_icon from "assets/hero/icons/gift.svg";
import greeting_icon from "assets/hero/icons/greeting.svg";
import list_icon from "assets/hero/icons/list.svg";
import bell_icon from "assets/hero/icons/bell.svg";
import message_icon from "assets/hero/icons/message.svg";
import Text from "@/components/atoms/text";
import React from "react";
import { mergeClass } from "@/utils/styling/tw-merge";
import CButton from "@/components/atoms/button";
import Link from "next/link";

type iSlide = {
  bg: StaticImageData;
  titleSection: {
    title: string;
    subtitle: string;
    desc: string;
  }
  stepSection: Array<Step>;
  action: () => React.ReactNode
}
const DUMMY_CAROUSEL = [
  {
    bg: registry_hero_bg_url,
    titleSection: {
      title: "Gift Registry",
      subtitle: "Acaramu sebentar lagi!",
      desc: "Buat daftar hadiah yang kamu inginkan lalu bagikan ke teman & keluargamu secara online hanya dengan tiga langkah mudah!",
    },
    // stepSection: [
    //   {
    //     content: (
    //       <>
    //         Tentukan Acara <br />
    //         Specialmu
    //       </>
    //     ),
    //     icon: bell_icon,
    //     step: 1,
    //   },
    //   {
    //     content: (
    //       <>
    //         Pilih Hadiah
    //         <br />
    //         Favoritmu
    //       </>
    //     ),
    //     icon: gift_icon,
    //     step: 2,
    //     containerClassname: "col-start-2",
    //   },
    //   {
    //     content: (
    //       <>
    //         Bagi ke Orang
    //         <br />
    //         Terdekatmu
    //       </>
    //     ),
    //     icon: message_icon,
    //     step: 3,
    //     containerClassname: "col-start-3",
    //   },
    // ],
    // action: () => (
    //   <CButton className="bg-kunyit px-7 py-1 font-black">
    //     Jelajahi Hadiah
    //   </CButton>
    // )
      stepSection: [
      {
        content: (
          <>
            Pilih Hadiah <br />
            yang sesuai
          </>
        ),
        icon: gift_icon,
        step: 1,
      },
      {
        content: (
          <>
            Tulis
            <br />
            Kartu Ucapan
          </>
        ),
        icon: greeting_icon,
        step: 2,
        containerClassname: "col-start-2",
      },
      {
        content: (
          <>
            Isi Data Kirim
            <br />
            lalu Bayar
          </>
        ),
        icon: list_icon,
        step: 3,
        containerClassname: "col-start-3",
      },
    ],
    action: () => (
      <Box className="flex items-center gap-x-12 py-2">
        <Link href="/">
          <Text className="text-pandan font-bold">
            Cari Registry
          </Text>
        </Link>
        <CButton className="px-7 py-1 font-black">
          <Link href="/registry/event">
          Buat Registry
          </Link>
        </CButton>
      </Box>
    )
  },
  // {
  //   bg: gift_hero_bg_url,
  //   titleSection: {
  //     title: "Gift Shop",
  //     subtitle: "Waktunya memberi kejutan!",
  //     desc: "Beri hadiah untuk merayakan berbagai momen spesial dengan ragam produk dari brand lokal yang telah dikurasi asli Indonesia!",
  //   },
  //   stepSection: [
  //     {
  //       content: (
  //         <>
  //           Pilih Hadiah <br />
  //           yang sesuai
  //         </>
  //       ),
  //       icon: gift_icon,
  //       step: 1,
  //     },
  //     {
  //       content: (
  //         <>
  //           Tulis
  //           <br />
  //           Kartu Ucapan
  //         </>
  //       ),
  //       icon: greeting_icon,
  //       step: 2,
  //       containerClassname: "col-start-2",
  //     },
  //     {
  //       content: (
  //         <>
  //           Isi Data Kirim
  //           <br />
  //           lalu Bayar
  //         </>
  //       ),
  //       icon: list_icon,
  //       step: 3,
  //       containerClassname: "col-start-3",
  //     },
  //   ],
  //   action: () => (
  //     <Box className="flex items-center gap-x-12 py-2">
  //       <Link href="/">
  //         <Text className="text-pandan font-bold">
  //           Cari Registry
  //         </Text>
  //       </Link>
  //       <CButton className="px-7 py-1 font-black">
  //         <Link href="/registry/event">
  //         Buat Registry
  //         </Link>
  //       </CButton>
  //     </Box>
  //   )
  // },
];
export default function HomeCarousel() {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      infiniteLoop
      autoPlay
      showThumbs={false}
      interval={5000}
    >
      {
        DUMMY_CAROUSEL.map(slide => (
          <Slide
            key={slide.titleSection.title}
            slide={slide}
          />
        ))
      }
    </Carousel>
  );
}

function Slide({ slide }: { slide: iSlide }) {
  const { desc, subtitle, title } = slide.titleSection
  return (
    <Box>
      <Image src={slide.bg} alt="registry" />
      <Box className="grid grid-cols-6 gap-x-10 px-20 py-5 text-start">
        <CarouselTitle desc={desc} subtitle={subtitle} title={title} />
        <CarouselSteps steps={slide.stepSection} />
        <CarouselAction action={slide.action} />
      </Box>
    </Box>
  );
}

function CarouselTitle({
  title,
  subtitle,
  desc,
}: {
  title: string;
  subtitle: string;
  desc: string;
}) {
  return (
    <Box className="col-span-2 flex flex-col gap-y-3">
      <Text size="tiny" variant="title" className="text-7xl text-pandan">
        {title}
      </Text>
      <Box>
        <Text className="font-black" size="small">
          <i>{subtitle}</i>
        </Text>
        <Text className="indent-4" size="large">
          {desc}
        </Text>
      </Box>
    </Box>
  );
}

function CarouselAction({ action }: { action: () => React.ReactNode }) {
  return (
    <Box className="col-span-2 flex items-center justify-end">
      {action()}
    </Box>
  );
}

type Step = {
  content: React.ReactNode;
  icon: StaticImageData;
  step: number;
  containerClassname?: string;
};

function CarouselSteps({ steps }: { steps: Array<Step> }) {
  return (
    <Box className="col-span-2 grid grid-cols-5">
      {steps.map((step) => (
        <Step key={`step-${step.step}`} stepData={step} containerClassname={step.containerClassname} />
      ))}
    </Box>
  );
}

function Step({
  stepData,
  containerClassname,
}: {
  stepData: { step: number; content: React.ReactNode; icon: StaticImageData };
  containerClassname?: string;
}) {
  const { content, icon, step } = stepData;
  return (
    <Box
      className={mergeClass(
        "col-span-4 flex items-center gap-x-5",
        containerClassname
      )}
    >
      <Text variant="title" size="small" className="text-kunyit">
        {step}
      </Text>
      <Box>
        <Image className="w-[48px] h-[50px]" src={icon} alt="gift-icon" />
      </Box>
      <Text>{content}</Text>
    </Box>
  );
}
