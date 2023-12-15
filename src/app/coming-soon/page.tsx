import { Box } from "@mui/material";

import coming_soon_bg from 'assets/coming-soon.png'
import coming_soon_mobile_bg from 'assets/coming-soon-mobile.png'
import ResponsiveImage from "@/components/atoms/responsive-image-bg";

export default function ComingSoon() {
  return (
    <Box className="w-full h-full">
      <ResponsiveImage
        alt="coming-soon"
        mobileAsset={coming_soon_mobile_bg}
        desktopAsset={coming_soon_bg}
      />
    </Box>
  )
}