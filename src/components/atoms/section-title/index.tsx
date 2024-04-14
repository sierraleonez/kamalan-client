import { Box, Typography } from "@mui/material";
import Text from "../text";

export default function SectionTitle({ title }: { title: React.ReactNode }) {
  return (
    <Box className="flex items-center justify-center gap-x-8">
      {/* <Box className="grow bg-pandan h-1" /> */}
      <Text variant="title" size="small" className="text-pandan max-w-full">
        {title}
      </Text>
      {/* <Box className="bg-pandan h-1 grow" /> */}
    </Box>
  );
}
