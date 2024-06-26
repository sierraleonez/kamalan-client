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
import { openLoginModal } from "@/lib/features/global/modalSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { openToast } from "@/lib/features/global/toastSlice";

export default function NavBar() {
  const dispatch = useAppDispatch()
  const { isLoggedIn } = useAppSelector(state => state.auth)
  const screenWidth = typeof screen !== "undefined" ? screen.width : 1920;
  const [springs, api] = useSpring(() => ({
    from: { opacity: 0, width: 257 },
  }));

  function onHover(e: MouseEvent<Element>) {
    e.stopPropagation();
    const [a] = api.start({
      from: { width: 0 },
      to: { width: screenWidth },
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

  function onAccountIconClick() {
    if (isLoggedIn) {
      dispatch(openToast({
        message: 'You are logged in'
      }))
    } else {
      dispatch(openLoginModal())
    }
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
          <Box>
            <Image src={kamalan_logo_green} alt="kamalan_logo" />
          </Box>
          <animated.div
            onMouseEnter={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              right: 0,
              opacity: springs.opacity,
              height: "fit-content",
            }}
          >
            <NavbarIcons items={[{
              icon: cart_icon,
              onClick: () => { }
            }, {
              icon: account_icon,
              onClick: onAccountIconClick,
            }, {
              icon: registry_icon,
              onClick: () => { }
            }]} />
          </animated.div>
        </Box>
      </Box>
    </Box>
  );
}
