import { Box, Typography } from "@mui/material";

export default function SectionTitle({ title }: { title: React.ReactNode }) {
  return (
    <Box className="flex items-center gap-x-8">
      <Box className="grow bg-pandan h-1" />
      <Typography variant="h3" className="text-pandan max-w-full">
        {title}
      </Typography>
      <Box className="bg-pandan h-1 grow" />
    </Box>
  );
}
