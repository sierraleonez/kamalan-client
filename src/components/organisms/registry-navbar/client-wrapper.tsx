"use client"

import NavbarIcons from "@/components/molecules/navbar-icons";
import account_icon from "assets/utility/account-outlined.svg";
import cart_icon from "assets/utility/cart-outlined.svg";
import registry_icon from "assets/utility/registry-outlined.svg";

export function NavbarIconClient() {
  return (
    <NavbarIcons items={[{
      icon: cart_icon,
      onClick: () => { }
    }, {
      icon: account_icon,
      onClick: () => { },
    }, {
      icon: registry_icon,
      onClick: () => { }
    }]} />
  )
}