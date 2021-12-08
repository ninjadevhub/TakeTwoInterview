import React, { ReactChild } from "react"
import Box from "@mui/material/Box"

interface IProps {
  children: ReactChild
}
export default function MainLayout(props: IProps) {
  return (
    <Box
      component='main'
      sx={(theme) => ({
        height: "100vh",
        width: "100%",
        backgroundColor: "common.white",
        display: "flex",
        [theme.breakpoints.down("lg")]: {
          height: "100%",
        },
      })}
    >
      {props.children}
    </Box>
  )
}
