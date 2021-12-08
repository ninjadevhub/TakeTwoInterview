import React, { useState } from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Vimeo from "@u-wave/react-vimeo"
import { Button, Card, Dialog } from "../../../shared"
import ArrowIcon from "../../../assets/images/right-arrow.png"

export default function CardVideo() {
  const [openVideo, setOpenVideo] = useState<boolean>(false)
  return (
    <Card
      sx={(theme) => ({
        width: 480,
        height: 380,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginInlineEnd: "31px",
        [theme.breakpoints.down("lg")]: {
          marginInlineEnd: 0,
          marginBottom: "31px",
          width: 400,
          height: 300,
        },
      })}
    >
      <Box component='div' sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Typography variant='h4' sx={{ lineHeight: "32px", paddingBottom: "34px", paddingTop: "45px", color: "common.white" }}>
          Video #1
        </Typography>
        <Typography variant='h2' sx={{ color: "common.white" }}>
          Flowers
        </Typography>
      </Box>
      <Button
        onClick={() => setOpenVideo(true)}
        sx={(theme) => ({
          marginBottom: "40px",
          width: "250px",
          typography: "h6",
        })}
      >
        <img src={ArrowIcon} width='14px' height='13px' alt='right-arrow' />
        &nbsp;
        <span>Play Video</span>
      </Button>
      <Dialog open={openVideo} onClose={() => setOpenVideo(false)}>
        <Vimeo video='https://vimeo.com/647120601' autoplay />
      </Dialog>
    </Card>
  )
}
