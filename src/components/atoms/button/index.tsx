"use client";

import { fontFamily } from "@/style/text";
import { mergeClass } from "@/utils/styling/tw-merge";
import { CircularProgress } from "@mui/material";
import { stringify } from "querystring";
import { MouseEventHandler } from "react";

type ButtonActionType = "submit" | "reset" | "button";
type ButtonStyleType = "fill" | "border" | "link"

export default function CButton({
  children,
  onClick,
  type = "button",
  form,
  disabled,
  className,
  loading,
  styleType = "fill"
}: {
  children: React.ReactNode;
  onClick?: MouseEventHandler;
  type?: ButtonActionType;
  form?: string;
  disabled?: boolean;
  className?: string
  loading?: boolean;
  styleType?: ButtonStyleType
}) {
  const outerStyle: {[key in ButtonStyleType]: string} = {
    border: "border-pandan border-solid border-2",
    fill: "bg-pandan",
    link: "px-0"
  }
  const buttonStyle = outerStyle[styleType]
  return (
    <button
      disabled={disabled}
      form={form}
      type={type}
      onClick={onClick}
      className={mergeClass("px-12 py-3 text-white font-black text-xl w-fit", fontFamily.copy, className, buttonStyle)}
    >
      {
        loading ? <CircularProgress size={20} style={{ color: '#FFF' }} /> : (
          children
        )
      }
    </button>
  );
}
