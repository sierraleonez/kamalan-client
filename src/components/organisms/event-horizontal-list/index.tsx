import EventCard from "@/components/molecules/event-card";
import { Box } from "@mui/material";

type iEvent = {
  title: string;
  description: string;
  key: string;
};

type EventList = Array<iEvent>;

export default function EventHorizontalList({ events }: { events: EventList }) {
  return (
    <Box className="grid mt-6 grid-cols-4 gap-x-5">
      {events.map((event) => (
        <EventCard event={event} key={event.key} />
      ))}
    </Box>
  );
}
