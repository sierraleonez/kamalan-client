import HeroHalf from "@/components/molecules/hero-half";
import { Box } from "@mui/material";
import { StaticImageData } from "next/image";

type IHeroHalfProps = {
  asset: StaticImageData;
  title: React.ReactNode;
};

type IHomeHeroProps = {
  leftHero: IHeroHalfProps;
  rightHero: IHeroHalfProps;
};

export default function HomeHero({ leftHero, rightHero }: IHomeHeroProps) {
  return (
    <Box className="w-full flex overflow-hidden">
      <HeroHalf {...leftHero} key={"left-hero"} />
      <HeroHalf {...rightHero} labelColor="text-white" key={"right-hero"} />
    </Box>
  );
}
