import LargeGradientBox from "@/components/atoms/large-gradient-box";
import SmallBorderGiftBox from "@/components/atoms/small-border-gift-box";
import { Box } from "@mui/material";

export type iHomeContent = {
  type: 'large' | 'small'
  children?: React.ReactNode
  key: string
  position: 'l' | 'r'
  className?: string
}

type iHomeContentBoxProps = {
  contents: Array<iHomeContent>
}
export default function HomeContentBox({ contents }: iHomeContentBoxProps) {
  return (
    <Box className="flex items-center">
      {contents.map(content => {
        if (content.type === 'large') {
          return (
            <LargeGradientBox className={content.className} key={content.key}>{content.children}</LargeGradientBox>
          )
        } else {
          return (
            <SmallBorderGiftBox position={content.position} key={content.key}>{content.children}</SmallBorderGiftBox>
          )
        }
      })}
    </Box>
  )
}