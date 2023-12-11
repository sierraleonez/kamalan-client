"use client"
import Text from "@/components/atoms/text";
import { Box } from "@mui/material";


export default function EventTitleBox({ title }: { title: string }) {
  return (
    <Box className="bg-pandan w-full rounded-t-[40px] py-4">
      <Text size="small" variant="title" className="text-white text-center">
        {title}
      </Text>
    </Box>
  );
}
