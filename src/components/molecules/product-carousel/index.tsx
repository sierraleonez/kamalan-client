"use client"

import { Box } from "@mui/material"
import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from  "./style.module.scss"

export default function ProductCarousel ({ children }: { children: Array<React.ReactChild> }) {
  return (
    <Carousel  className={styles.overrideDots} showThumbs={false} showStatus={false} autoPlay showArrows={false} infiniteLoop renderIndicator={(e, isSelected, idx, label) => {
      return (
        <Box sx={{ borderColor: '#889966', borderWidth: '3px', borderStyle: 'solid' }} className="inline-block mr-3 bg-pandan w-3 h-3 rounded-full"/>
      )
    }}>
      {children}
    </Carousel>
  )
}