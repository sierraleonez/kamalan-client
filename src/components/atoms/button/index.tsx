"use client";

import { fontFamily } from "@/style/text";
import { mergeClass } from "@/utils/styling/tw-merge";
import { MouseEventHandler } from "react";

type ButtonActionType = "submit" | "reset" | "button";

export default function CButton({
  children,
  onClick,
  type = "button",
  form,
  disabled,
  className
}: {
  children: React.ReactNode;
  onClick?: MouseEventHandler;
  type?: ButtonActionType;
  form?: string;
  disabled?: boolean;
  className?: string
}) {
  return (
    <button
      disabled={disabled}
      form={form}
      type={type}
      onClick={onClick}
      className={mergeClass("px-12 py-3 bg-pandan text-white font-black text-xl w-fit", fontFamily.copy, className)}
    >
      {children}
    </button>
  );
}
