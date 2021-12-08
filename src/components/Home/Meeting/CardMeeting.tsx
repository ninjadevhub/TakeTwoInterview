import React from "react"
import Typography from "@mui/material/Typography"
import { Card } from "../../../shared"

export default function CardMeeting() {
  return (
    <Card
      sx={(theme) => ({
        width: 400,
        height: 322,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginInlineEnd: "31px",
        [theme.breakpoints.down("lg")]: {
          width: 320,
          height: 250,
          marginInlineEnd: 0,
          marginBottom: "31px",
        },
      })}
    >
      <Typography variant='h4' sx={{ lineHeight: "32px", color: "common.white" }}>
        Next Meeting 1
      </Typography>
      <Typography variant='h5' sx={{ lineHeight: "32px", color: "common.white" }}>
        January 12 9pm EST
      </Typography>
    </Card>
  )
}
