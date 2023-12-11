"use client";

import { MouseEventHandler } from "react";

type ButtonActionType = 'submit' | 'reset' | 'button'

export default function CButton({
  children,
  onClick,
  type = 'button',
  form
}: {
  children: React.ReactNode;
  onClick?: MouseEventHandler;
  type?: ButtonActionType;
  form?: string
}) {
  return (
    <button form={form} type={type} onClick={onClick} className="px-12 py-3 bg-pandan text-white w-fit">
      {children}
    </button>
  );
}
