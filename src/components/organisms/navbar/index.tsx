"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import kamalan_logo_green from "assets/kamalan_logo_green.svg";
import { useSpring, animated } from "@react-spring/web";

export default function NavBar() {
  const [springs, api] = useSpring(() => ({
    from: { width: 257 },
  }));

  function onHover() {
    api.start({
      from: { width: 0 },
      to: { width: 1920 },
    });
  }

  function onMouseLeave() {
    api.start({
      from: { width: 1920 },
      to: { width: 0 },
    });
  }
  return (
    <Box className="fixed w-full flex justify-center items-center z-20">
      <Box>
        <animated.div style={springs} />
        <Box
          onMouseEnter={onHover}
          onMouseLeave={onMouseLeave}
          className="bg-white pt-10 pb-6 px-4 rounded-b-[64px] flex justify-center"
        >
          <Image src={kamalan_logo_green} alt="kamalan_logo" />
        </Box>
      </Box>
    </Box>
  );
}
