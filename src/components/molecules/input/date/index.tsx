import { DatePicker } from "@mui/x-date-pickers";
import { Control, Controller } from "react-hook-form";

export default function DateInput({
    name,
    control,
    label,
    defaultValue,
    required
  }: {
    name: string;
    control: Control;
    label?: string;
    defaultValue?: string | any;
    required?: boolean;
  }) {
    const { _formState: { errors }, _defaultValues, _formValues } = control
    const err = errors[name]
    console.log(_formValues)
    return (
      <Controller
        name={name}
        rules={{ required }}
        control={control}
        render={({ field }) => (
          <DatePicker
            disablePast
            defaultValue={_defaultValues[name]}
            label={label}
            slotProps={{
              textField: {
                error: !!err
              }
            }}
            className="w-full"
            onChange={(date) => field.onChange(date)}
          />
        )}
      />
    );
  }
  