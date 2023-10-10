import { Box } from "@mui/material";

export default function LargeGradientBox({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <Box className={`w-3/5 h-[600px] ${className}`}>{children}</Box>;
}
