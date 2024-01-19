"use client";

import CButton from "@/components/atoms/button";
import Text from "@/components/atoms/text";
import DialogOuter from "@/components/molecules/dialog";
import InputWithLabel from "@/components/molecules/input";
import { Box } from "@mui/material";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

export default function LoginFormModal() {
  const methods = useForm();
  return (
    <DialogOuter>
      <Box className="w-full grid gap-y-10">
        <Text className="text-center">Login Dulu yuk!</Text>
        <FormProvider {...methods}>
          <form className="flex flex-col w-full gap-y-4 items-center justify-center">
            <InputWithLabel label="Email" name="email" required type="email" />
            <InputWithLabel
              label="Password"
              name="password"
              type="password"
              required
            />
            <Link href="/" target="_blank">
              <Text>Lupa Password?</Text>
            </Link>

            <CButton type="submit">
              Login
            </CButton>

            <Text>Jika belum memiliki akun silahkan register <Link href="/register">disini</Link></Text>
          </form>
        </FormProvider>
      </Box>
    </DialogOuter>
  );
}
