"use client"
import { iPickerItemProps } from "@/types";
import { SelectChangeEvent, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

export default function Dropdown({ name, inputId, inputLabelId, items, label, required = false, onChange }: { name: string; inputLabelId: string; inputId: string; label?: string; items: Array<iPickerItemProps>; required?: boolean; onChange?: (e: SelectChangeEvent<any>) => void }) {
    const { register, control, formState: { errors, defaultValues } } = useFormContext()
    const reg = register(name, { required })
    return (
      <Controller name={name} control={control} render={({ field }) => (
        <FormControl>
          {label && (
            <InputLabel id={inputLabelId}>{label}</InputLabel>
          )}
          <Select
            labelId={inputLabelId}
            id={inputId}
            label={label}
            error={!!errors[name]}
            defaultValue={defaultValues?.[name]}
            {...reg}
            onChange={(e) => {
              reg.onChange(e)
              if (typeof onChange === 'function') {
                onChange(e)
              }
            }}
          >
            {items.map(item => (
              <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
  
      />
    )
  }