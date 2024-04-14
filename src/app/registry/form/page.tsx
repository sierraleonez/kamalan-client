"use client";

import CButton from "@/components/atoms/button";
import { Box, Checkbox, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Switch, TextField } from "@mui/material";
import Image from "next/image";
import { HTMLInputTypeAttribute, useState } from "react";
import green_love from "assets/love.svg";
import Text from "@/components/atoms/text";
import FileUploadField from "@/components/atoms/file-upload-field";
import { DatePicker } from "@mui/x-date-pickers";
import {
  Control,
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import { useGetProvincesQuery, useLazyGetCitiesQuery, useLazyGetSubdistrictsQuery } from "@/lib/services/master/region";
import { iPickerItemProps } from "@/types";
import { useStepThreeMutation } from "@/lib/services/registries";
import { iRegistryStepThreePayload } from "@/lib/services/type";
import { openToast } from "@/lib/features/global/toastSlice";

type RegistryInput = {
  "registry-greeting": string;
  "registry-picture": File;
  "registry-name": string;
  "registry-date": Object;
  "registry-owner-name": string;
  "registry-owner-email": string;
  "registry-owner-phone": string;
  "registry-owner-province": string;
  "registry-owner-city": string;
  "registry-owner-district": string;
  "registry-owner-subdistrict": string;
  "registry-owner-postalCode": string;
  "registry-acknowledment": boolean;
  "registry-address-detail": string;
};

export default function RegistryForm() {
  const router = useRouter();
  const { event_date, name } = useAppSelector(state => state.registryCreation.registry)
  const [selectedImage, setSelectedImage] = useState<File>();
  const registryId = useAppSelector(state => state.registryCreation.registry.id)
  const [submitStepThree] = useStepThreeMutation()
  const methods = useForm<RegistryInput>({
    defaultValues: {
      "registry-name": name,
      "registry-date": dayjs(event_date),
      "registry-owner-province": ""
    },
    values: {
      "registry-owner-province": "",
      "registry-name": name,
      "registry-date": dayjs(event_date),
      "registry-greeting": "",
      "registry-owner-district": "",
      "registry-acknowledment": false,
      "registry-address-detail": "",
      "registry-owner-city": "",
      "registry-owner-email": "",
      "registry-owner-name": "",
      "registry-owner-phone": "",
      "registry-owner-postalCode": "",
      "registry-owner-subdistrict": "",
      "registry-picture": {  } as any
    }
  });

  const dispatch = useAppDispatch();
  const { handleSubmit, register, control } = methods;


  async function onSubmit(val: RegistryInput) {
    try {
      const payload: iRegistryStepThreePayload = {
        name: val["registry-name"],
        city: val["registry-owner-city"],
        detail_address: val["registry-address-detail"],
        is_private: false,
        is_published: false,
        message: val["registry-greeting"],
        phone_number: val["registry-owner-phone"],
        postal_code: val["registry-owner-postalCode"],
        province: val["registry-owner-province"],
        registry_id: registryId,
        subdistrict: val["registry-owner-subdistrict"],
        user_asset: selectedImage as File
      }

      let form = new FormData()
      Object.entries(payload).forEach(([key, val]) => {
        form.append(key, val)
      })

      await submitStepThree(form)
      dispatch(openToast({
        type: 'success',
        message: 'Registry telah lengkap!'
      }))
      router.push("/registry/share");
    } catch (err) {
      
    }
  }
  return (
    <Box className="pb-10">
      <FormProvider {...methods}>
        <form
          className="grid grid-cols-2 gap-x-10"
          id="userDetail"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box className="flex flex-col gap-y-4">
            <ImageUploadField
              control={control}
              name="registry-picture"
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />

            <Text variant="title" size="medium" className="text-pandan">
              Mawar&apos;s Wedding Registry
            </Text>

            <Box className="w-full h-1 bg-kunyit" />

            <Box className="grid grid-cols-4 w-full gap-x-5">
              <Box className="col-span-1 flex flex-col gap-y-1 items-center">
                <PrivacySwitch name="registry-privacy-option" control={control} />
                <Text size="tiny" className="text-kluwak text-center leading-5">
                  Registry-mu hanya terlihat oleh orang yang kamu pilih
                </Text>
              </Box>

              <Box className="col-span-3">
                <InputWithLabel
                  required
                  multiline
                  minRows={4}
                  label="Kata Sambutan"
                  {...register("registry-greeting")}
                />
              </Box>
            </Box>
          </Box>
          <Box className="flex flex-col gap-y-7">
            <RightForm />
            <CButton type="submit" form="userDetail">
              Buat Registry
            </CButton>
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
}

function ImageUploadField({
  selectedImage,
  setSelectedImage,
  name,
  control,
}: {
  selectedImage: File | undefined;
  setSelectedImage: (file: File) => void;
  name: string;
  control: Control<any>;
}) {
  const { _formState: { errors } } = control
  const err = errors[name]
  const classError = err ? "border-error text-error" : ""
  return (
    <Box className={twMerge("w-full h-80 border border-gula border-dashed flex flex-col justify-center items-center gap-y-4", classError)}>
      {selectedImage ? (
        <Image
          src={URL.createObjectURL(selectedImage)}
          alt="selected_image"
          width={1920}
          height={1080}
        />
      ) : (
        <>
          <Image src={green_love} alt="green_love" />
          <Text size="tiny" className="font-light text-kluwak">
            <i>Unggah foto terbaikmu untuk jadi sampul Registry!</i>
          </Text>
          <FileUploadField
            control={control}
            name={name}
            onChange={(file) => {
              setSelectedImage(file);
            }}
          />
        </>
      )}
    </Box>
  );
}

function RightForm() {
  const { register, control, getValues } = useFormContext();

  const selectedProvince = getValues('registry-owner-province')
  const selectedCity = getValues('registry-owner-city')
  const { data: provinces } = useGetProvincesQuery()
  console.log(getValues(), selectedProvince)
  const [getCities, { data: cities }] = useLazyGetCitiesQuery()
  const [getSubdistricts, { data: subdistricts }] = useLazyGetSubdistrictsQuery()
  // const { data: cities } = useGetCitiesQuery(selectedProvince, { skip: !selectedProvince })
  // const { data: subdistricts } = useGetSubdistrictsQuery(selectedCity, { skip: !selectedCity })
  return (
    <Box className="grid gap-x-5 gap-y-5">
      <InputWithLabel required label="Nama Acara" name="registry-name" />
      <DateInput control={control} label="Tanggal Acara" name="registry-date" />
      <InputWithLabel
        required
        name="registry-owner-name"
        label="Nama Pemilik Acara"
      />
      <InputWithLabel
        required
        name="registry-owner-email"
        type="email"
        label="Email"
      />
      <InputWithLabel
        required
        name="registry-owner-phone"
        type="tel"
        label="Telepon"
      />
      <InputWithLabel
        required
        name="registry-address-detail"
        label="Alamat Rumah"
        minRows={4}
        multiline
      />
      <Dropdown
        inputId="province"
        inputLabelId="province-label"
        items={provinces || []}
        onChange={async(e) => {

          await getCities(e.target.value)
        }}
        required
        label="Provinsi"
        name="registry-owner-province"
      />
      <Dropdown
        inputId="city"
        inputLabelId="city-label"
        items={cities || []}
        onChange={async(e) => {
          await getSubdistricts(e.target.value)
        }}
        required
        label="Kota"
        name="registry-owner-city"
      />
      <Dropdown
        inputId="subdistrict"
        inputLabelId="subdistrict-label"
        items={subdistricts || []}
        required
        label="Kecamatan"
        name="registry-owner-subdistrict"
      />
      <InputWithLabel
        required
        name="registry-owner-postalCode"
        type="number"
        label="Kode Pos"
      />

      <Box className="flex items-center">
        <Checkbox {...register("event-acknowledgement", { required: true })} />
        <Text size="tiny" className="text-kluwak font-light leading-5">
          Dengan mencentang kotak ini, saya menyetujui jika semua data yang
          telah diisi diperuntukan hanya untuk kepentingan pengiriman hadiah
          Registry.
        </Text>
      </Box>
    </Box>
  );
}

function InputWithLabel({
  label,
  type = "text",
  name,
  required = false,
  multiline = false,
  minRows = 1,
  defaultValue
}: {
  label: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  required?: boolean;
  multiline?: boolean;
  minRows?: number;
  defaultValue?: string
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const err = errors[name];
  return (
    <Box className="w-full">
      <TextField
        defaultValue={defaultValue}
        multiline={multiline}
        minRows={minRows}
        error={!!err}
        {...register(name, { required })}
        placeholder=""
        label={label}
        type={type}
        className="w-full"
      />
    </Box>
  );
}

function DateInput({
  name,
  control,
  label,
  defaultValue
}: {
  name: string;
  control: Control;
  label: string;
  defaultValue?: string | any;
}) {
  const { _formState: { errors }, _defaultValues } = control
  const err = errors[name]
  return (
    <Controller
      name={name}
      rules={{ required: true }}
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

function PrivacySwitch({ control, name }: { control: Control<any>, name: string }) {
  const { _formState: { errors }, _formValues } = control
  const active = "text-kunyit"

  return (
    <Controller name={name} defaultValue={false} control={control} render={({ field }) => (
      <Box className="flex items-center">
        <Text size="small" className={twMerge("font-black text-gula", _formValues[name] ? "" : active)}>
          Privat
        </Text>
        <Switch onChange={event => field.onChange(event.target.checked)} />
        <Text size="small" className={twMerge("font-black text-gula", _formValues[name] ? active : "")}>
          Publik
        </Text>
      </Box>
    )} />
  );
}

function Dropdown({ name, inputId, inputLabelId, items, label, required = false, onChange }: { name: string; inputLabelId: string; inputId: string; label: string; items: Array<iPickerItemProps>; required?: boolean; onChange?: (e: SelectChangeEvent<any>) => void }) {
  const { register, control, formState: { errors, defaultValues } } = useFormContext()
  const reg = register(name, { required })
  return (
    <Controller name={name} control={control} render={({ field }) => (
      <FormControl>
        <InputLabel id={inputLabelId}>{label}</InputLabel>
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
