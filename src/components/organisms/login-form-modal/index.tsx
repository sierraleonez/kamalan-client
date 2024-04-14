"use client";

import CButton from "@/components/atoms/button";
import EventModalTitle from "@/components/atoms/event-modal-title";
import Text from "@/components/atoms/text";
import DialogOuter from "@/components/molecules/dialog";
import InputWithLabel from "@/components/molecules/input";
import { login } from "@/lib/features/global/authSlice";
import { closeLoginModal, openRegisterModal } from "@/lib/features/global/modalSlice";
import { closeToast, openToast } from "@/lib/features/global/toastSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useLoginMutation } from "@/lib/services/users";
import { Box } from "@mui/material";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

interface iLoginFormModalProps {
  open: boolean;
}
export default function LoginFormModal() {
  const dispatch = useAppDispatch()
  const { login: { open } } = useAppSelector(state => state.modal)
  const methods = useForm<{
    email: string,
    password: string
  }>();
  const [submitLogin, { isLoading }] = useLoginMutation()

  return (
    <DialogOuter
      open={open}
      onClose={() => { dispatch(closeLoginModal()) }}
    >
      <Box className="w-full grid gap-y-10">
        <EventModalTitle>
          <CButton styleType="border" onClick={() => {
            dispatch(closeLoginModal())
            dispatch(openRegisterModal())
          }}>
            <Text className="text-pandan">Buat Akun</Text>
          </CButton>
          {/* <Text className="text-center">Login Dulu yuk!</Text> */}
        </EventModalTitle>
        <Box className="flex items-center gap-x-3">
          <Box className="grow bg-gula h-0.5" />
          <Text>Atau</Text>
          <Box className="grow bg-gula h-0.5" />
        </Box>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(async (data) => {
            const res = await submitLogin(data).unwrap()
            const token = res.data.token
            const email = methods.getValues('email')
            dispatch(
              login({ token, email })
            )
            dispatch(openToast({
              message: 'Login sukses!',
              type: 'success'
            }))
            dispatch(closeLoginModal())
          })} className="flex flex-col w-full gap-y-4 items-center justify-center">
            <InputWithLabel label="Email" name="email" required type="email" />
            <InputWithLabel
              label="Kata Sandi"
              name="password"
              type="password"
              required
            />

            <CButton loading={isLoading} type="submit">
              Masuk
            </CButton>

            <Link href="/" target="_blank">
              <Text>Lupa kata sandimu?</Text>
            </Link>
          </form>
        </FormProvider>
      </Box>
    </DialogOuter >
  );
}
