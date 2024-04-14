"use client"
import EventModalTitle from "@/components/atoms/event-modal-title";
import Text from "@/components/atoms/text";
import DialogOuter from "@/components/molecules/dialog";
import InputWithLabel from "@/components/molecules/input";
import { Box } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import ReCaptcha from 'react-google-recaptcha'
import CButton from "@/components/atoms/button";
import { useRegisterMutation } from "@/lib/services/users";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { closeRegisterModal } from "@/lib/features/global/modalSlice";
import { openToast } from "@/lib/features/global/toastSlice";

export default function RegisterFormModal() {
  const { open } = useAppSelector(state => state.modal.register)
  const dispatch = useAppDispatch()
  const [submitRegister, { isLoading }] = useRegisterMutation()
  const methods = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      captcha: ""
    }
  })
  return (
    <DialogOuter onClose={() => dispatch(closeRegisterModal())} open={open}>
      <Box className="max-w-[30rem] grid gap-y-10">
        <EventModalTitle>
          <Text variant="title" size="small">Registrasi</Text>
        </EventModalTitle>
        <Box>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(async (val) => {
                await submitRegister(val).unwrap()
                dispatch(openToast({
                  message: 'Register berhasil! Silahkan Login dengan akun baru anda',
                  type: 'success'
                }))
                dispatch(closeRegisterModal())
              })}
              className="flex flex-col gap-y-4 items-center"
            >
              <InputWithLabel
                label="Nama"
                name="name"
                required
              />
              <InputWithLabel
                label="Email"
                name="email"
                type="email"
                required
              />
              <InputWithLabel
                label="Password"
                name="password"
                type="password"
                required
              />
              <ReCaptcha
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={(t) => {
                  methods.setValue('captcha', t || "")
                }}
              />
              <CButton type="submit" loading={isLoading} >
                <Text >
                  Buat Akun
                </Text>
              </CButton>
            </form>
          </FormProvider>
        </Box>
      </Box>
    </DialogOuter>
  )
}