"use client";
import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import EventTitleBox from "@/components/molecules/event-title-box";

import weddingBg from "assets/events/registry/wedding.jpg";
import birthdayBg from "assets/events/registry/birthday.jpg";
import babyShowerBg from "assets/events/registry/baby_shower.jpg";
import houseWarmingBg from "assets/events/registry/house_warming.jpg";
import { useAppDispatch } from "@/lib/hooks";
import { openEventModal } from "@/lib/features/global/modalSlice";

type iEvent = {
  title: string;
  description: string;
  key: string;
};

const assets: { [key: string]: StaticImageData } = {
  wedding: weddingBg,
  birthday: birthdayBg,
  "baby-shower": babyShowerBg,
  "house-warming": houseWarmingBg,
};

export default function EventCard({ event }: { event: iEvent }) {
  const dispatch = useAppDispatch();
  return (
    <Box
      key={event.key}
      className="relative h-[760px]"
      onClick={() => dispatch(openEventModal(event.key))}
    >
      <Image
        className="absolute z-0 w-full h-full"
        fill
        src={assets[event.key]}
        alt="event-bg"
      />
      <Box className="absolute w-full h-full flex justify-center items-end">
        <EventTitleBox title={event.title} />
      </Box>
    </Box>
  );
}
