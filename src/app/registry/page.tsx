import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import weddingBg from "assets/events/registry/wedding.jpg";
import birthdayBg from "assets/events/registry/birthday.jpg";
import babyShowerBg from "assets/events/registry/baby_shower.jpg";
import houseWarmingBg from "assets/events/registry/house_warming.jpg";
import LinkWrapper from "@/components/atoms/link-wrapper";
type iEvent = {
  asset: StaticImageData;
  title: string;
  description: string;
  href: string;
  key: string;
};

type EventList = Array<iEvent>;

const RegistryEvents: EventList = [
  {
    key: "wedding",
    asset: weddingBg,
    title: "Wedding",
    description: "",
    href: "",
  },
  {
    key: "birthday",
    asset: birthdayBg,
    title: "Birthday",
    description: "",
    href: "",
  },
  {
    key: "baby-shower",
    asset: babyShowerBg,
    title: "Baby Shower",
    description: "",
    href: "",
  },
  {
    key: "house-warming",
    asset: houseWarmingBg,
    title: "House Warming",
    description: "",
    href: "",
  },
];
export default function Registry() {
  return (
    <Box className="grid mt-6 grid-cols-4 gap-x-5">
      {RegistryEvents.map((event) => (
        <Box key={event.key} className="relative h-[760px]">
          <LinkWrapper pushPath={event.key}>
            <Image
              className="absolute z-0 w-full h-full"
              fill
              src={event.asset}
              alt="event-bg"
            />
            <Box className="absolute w-full h-full flex justify-center items-end pb-16">
              <Box className="w-4/5 flex flex-col items-center gap-y-8">
                <Typography variant="h2" className="text-white text-center">
                  {event.title}
                </Typography>
                <Box width={"60%"} height={4} bgcolor={"white"} />
              </Box>
            </Box>
          </LinkWrapper>
        </Box>
      ))}
    </Box>
  );
}
