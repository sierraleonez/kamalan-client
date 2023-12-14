"use client";

import CButton from "@/components/atoms/button";
import MuiTransition from "@/components/atoms/mui-transition";
import Text from "@/components/atoms/text";
import { Box, Dialog, TextField } from "@mui/material";
import EventModalTitle from "@/components/atoms/event-modal-title";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { closeEventModal } from "@/lib/features/global/modalSlice";
import { setRegistryNameAndDate } from "@/lib/features/registry/registryCreationSlice";

type Input = {
  name: string;
  date: string;
};

export default function EventFormModal() {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<Input>();
  const {
    eventDetailForm: { open, props },
  } = useAppSelector((state) => state.modal);
  const { push } = useRouter();

  function dispatchPushToProduct({ date, name }: Input) {
    dispatch(closeEventModal());
    dispatch(setRegistryNameAndDate({ name, date }));
    push(`/registry/${props.eventId}/product`);
  }

  return (
    <Dialog
      TransitionComponent={MuiTransition}
      open={open}
      // onClose={onClose}
      className="flex items-center justify-center"
    >
      <Box className="bg-white px-8 w-[30rem] flex flex-col gap-y-12 pt-4 pb-12 items-center">
        <EventModalTitle>
          Nama & <br />
          Tanggal
        </EventModalTitle>
        <Text size="tiny" variant="copy" className="text-center">
          Setiap acara perlu nama yang menarik bukan? Pastikan juga tanggal
          berapa acaramu akan berlangsung!
        </Text>
        <form
          id="eventDetail"
          onSubmit={handleSubmit(dispatchPushToProduct)}
          className="w-full flex flex-col w-full gap-y-4"
        >
          <TextField
            fullWidth
            placeholder="Nama Acara"
            {...register("name", { required: true })}
          />
          <TextField
            type="date"
            fullWidth
            placeholder="Tanggal Acara"
            {...register("date", { required: true })}
          />
        </form>
        <CButton form="eventDetail" type="submit">
          <Text variant="copy" size="medium" className="font-black">
            Selanjutnya
          </Text>
        </CButton>
      </Box>
    </Dialog>
  );
}
