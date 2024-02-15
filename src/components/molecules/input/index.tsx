import { Box, TextField } from "@mui/material";
import { HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";

export default function InputWithLabel({
  label,
  type = "text",
  name,
  required = false,
  multiline = false,
  minRows = 1,
  disabled = false
}: {
  label: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  required?: boolean;
  multiline?: boolean;
  minRows?: number;
  disabled?: boolean;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const err = errors[name];
  return (
    <Box className="w-full">
      <TextField
        disabled
        multiline={multiline}
        minRows={minRows}
        error={!!err}
        {...register(name, { required, disabled })}
        placeholder=""
        label={label}
        type={type}
        className="w-full"
      />
    </Box>
  );
}