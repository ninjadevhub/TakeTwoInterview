import React from "react"
import Box from "@mui/material/Box"
import { HomeComponent } from "../components/Home"
import Background from "../assets/images/home-image.png"

export default function Home() {
  return (
    <Box
      component='div'
      sx={(theme) => ({
        flex: "1 1 auto",
        display: "flex",
        flexFlow: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        [theme.breakpoints.down("lg")]: {
          flexFlow: "column",
          overflow: "auto",
          minWidth: "500px",
        },
      })}
    >
      <HomeComponent />
    </Box>
  )
}
