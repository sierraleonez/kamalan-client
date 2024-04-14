"use client"
import { Box } from "@mui/material";
import EventHorizontalList from "@/components/organisms/event-horizontal-list";
import EventFormModal from "@/components/organisms/event-form-modal";
import { useGetEventsQuery } from "@/lib/services/events";
import { useStepOneMutation } from "@/lib/services/registries";

export default function Registry() {
  const { data } = useGetEventsQuery({ include_on: 'REGISTRY' })
  const [submitStepOne, { isLoading }] = useStepOneMutation()
  const events = data?.data;

  return (
    <Box>
      <EventHorizontalList events={events || []} />
      <EventFormModal onSubmit={submitStepOne} loading={isLoading} />
    </Box>
  );
}

// async function getEvents(): Promise<EventList> {
//   try {
//     const res = await fetch(
//       "http://localhost:3003/api/event?event_type=registry"
//     );
//     const { data } = await res.json();
//     return data;
//   } catch (err) {
//     throw new Error("something is wrong happened");
//   }
// }
