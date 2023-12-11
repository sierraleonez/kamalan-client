import { Box } from "@mui/material";
import EventHorizontalList from "@/components/organisms/event-horizontal-list";
import EventFormModal from "@/components/organisms/event-form-modal";

type iEvent = {
  title: string;
  description: string;
  key: string;
};

type EventList = Array<iEvent>;

export default async function Registry() {
  const events = await getEvents();

  return (
    <Box>
      <EventHorizontalList events={events} />
      <EventFormModal />
    </Box>
  );
}

async function getEvents(): Promise<EventList> {
  try {
    const res = await fetch(
      "http://localhost:3003/api/event?event_type=registry"
    );
    const { data } = await res.json();
    return data;
  } catch (err) {
    throw new Error("something is wrong happened");
  }
}
