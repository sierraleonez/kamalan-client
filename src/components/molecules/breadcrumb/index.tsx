import BreadcrumbStep from "@/components/atoms/breadcrumb-step";
import { Box } from "@mui/material";

type iBreadcrumbStep = {
  id: string;
  title: string;
  href: string;
};

type BreadcrumbEntries = Array<iBreadcrumbStep>;
type iBreadcrumbProps = {
  crumbs: BreadcrumbEntries;
};
export default function Breadcrumb({ crumbs }: iBreadcrumbProps) {
  return (
    <Box className={`flex gap-x-2`}>
      {crumbs.map((crumb, idx) => (
        <BreadcrumbStep
          isArrowShown={idx < crumbs.length - 1}
          key={crumb.id}
          {...crumb}
        />
      ))}
    </Box>
  );
}
