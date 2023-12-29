"use client";

import CButton from "@/components/atoms/button";
import { ChangeEvent } from "react";
import { Control, Controller } from "react-hook-form";

export default function FileUploadField({
  onChange,
  control,
  name
}: {
  onChange: (file: File) => void;
  control: Control;
  name: string
}) {
  function onClick() {
    if (document) {
      const fileInput = document.getElementById("input_item");
      fileInput?.click();
    }
  }

  function onChangeFileInput(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files;
    if (file) {
      if (typeof onChange === "function") {
        onChange(file?.[0]);
      }
    }
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <input
            onChange={event => {
              // const nl: MediaSource = {  }
              const file = event.target.files?.[0]
              onChangeFileInput(event)
              field.onChange(URL.createObjectURL(file))
            }}
            type="file"
            hidden
            id="input_item"
          />
          <CButton onClick={onClick}>Upload</CButton>
        </>
      )}
    />
  );
}
