"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import kamalan_logo_green from "assets/kamalan_logo_green.svg";
import account_icon from "assets/utility/account.svg";
import cart_icon from "assets/utility/cart.svg";
import registry_icon from "assets/utility/my-registry.svg";
import { useSpring, animated } from "@react-spring/web";
import { MouseEvent } from "react";
import NavbarIcons from "@/components/molecules/navbar-icons";

export default function NavBar() {
  const [springs, api] = useSpring(() => ({
    from: { opacity: 0, width: 257 },
  }));

  function onHover(e: MouseEvent<Element>) {
    e.stopPropagation();
    const [a] = api.start({
      from: { width: 0 },
      to: { width: 1920 },
    });
    a.then((e) => {
      e.finished && api.start({ opacity: 100 });
    });
  }

  function onMouseLeave(e: MouseEvent<Element>) {
    e.stopPropagation();
    api.set({ opacity: 0 });
    api.start({
      from: { width: 1920 },
      to: { width: 0 },
    });
  }
  return (
    <Box className="fixed w-full flex justify-center items-center z-20">
      <Box className="relative">
        <animated.div style={springs} />
        <Box
          onMouseEnter={onHover}
          onMouseLeave={onMouseLeave}
          className="bg-white relative min-h-[136px] px-4 pt-10  pb-6 rounded-b-[64px] flex items-center items-center"
        >
          <Box >
            <Image src={kamalan_logo_green} alt="kamalan_logo" />
          </Box>
          <animated.div
            onMouseEnter={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              right: 0,
              opacity: springs.opacity,
              height: 'fit-content'
            }}
          >
            <NavbarIcons icons={[cart_icon, account_icon, registry_icon]}/>
          </animated.div>
        </Box>
      </Box>
    </Box>
  );
}
