"use client";

import CButton from "@/components/atoms/button";
import { Box, Checkbox, InputBase, Switch, TextField } from "@mui/material";
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
import { useAppDispatch } from "@/lib/hooks";
import {
  setRegistryAddress,
  setRegistryGreeting,
  setRegistryPersonalInfo,
  setRegistryPicture,
} from "@/lib/features/registry/registryCreationSlice";

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
  const [selectedImage, setSelectedImage] = useState<File>();
  const methods = useForm<RegistryInput>();
  const dispatch = useAppDispatch();
  const { handleSubmit, register, control } = methods;

  function onSubmit(val: RegistryInput) {
    dispatch(
      setRegistryPersonalInfo({
        name: val["registry-owner-name"],
        phone: val["registry-owner-phone"],
      })
    );

    dispatch(
      setRegistryAddress({
        city: val["registry-owner-city"],
        detail: val["registry-address-detail"],
        district: val["registry-owner-district"],
        subdistrict: val["registry-owner-subdistrict"],
        postalCode: val["registry-owner-postalCode"],
        province: val["registry-owner-province"]
      })
    )

    dispatch(setRegistryGreeting(val["registry-greeting"]))

    dispatch(setRegistryPicture(val["registry-picture"]))

    router.push("/registry/share");
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
                <PrivacySwitch />
                <Text size="tiny" className="text-kluwak text-center leading-5">
                  Registry-mu hanya terlihat oleh orang yang kamu pilih
                </Text>
              </Box>

              <Box className="col-span-3">
                <TextField
                  {...register("registry-greeting")}
                  className="w-full"
                  minRows={4}
                  label="Kata Sambutan"
                  multiline
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
  return (
    <Box className="w-full h-80 border border-gula border-dashed flex flex-col justify-center items-center gap-y-4">
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
  const { register, control } = useFormContext();
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
      <InputWithLabel
        required
        name="registry-owner-province"
        label="Provinsi"
      />
      <InputWithLabel required name="registry-owner-city" label="Kota" />
      <InputWithLabel
        required
        name="registry-owner-district"
        label="Kelurahan"
      />
      <InputWithLabel
        required
        name="registry-owner-subdistrict"
        label="Kecamatan"
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
}: {
  label: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  required?: boolean;
  multiline?: boolean;
  minRows?: number;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const err = errors[name];
  return (
    <Box className="w-full">
      <TextField
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
}: {
  name: string;
  control: Control;
  label: string;
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <DatePicker
          label={label}
          className="w-full"
          onChange={(date) => field.onChange(date)}
        />
      )}
    />
  );
}

function PrivacySwitch() {
  return (
    <Box className="flex items-center">
      <Text size="small" className="font-black text-kunyit">
        Privat
      </Text>
      <Switch checked />
      <Text size="small" className="font-black text-gula">
        Publik
      </Text>
    </Box>
  );
}
