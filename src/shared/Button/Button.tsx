import React from "react"
import Button, { ButtonProps } from "@mui/material/Button"

interface IProps extends ButtonProps {}

export default function CustomButton({ children, sx = [], ...props }: IProps) {
  return (
    <Button
      variant='contained'
      {...props}
      sx={[
        (theme) => ({
          display: "flex",
          backgroundColor: "secondary.main",
          boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.34902)",
          borderRadius: "6px",
          width: "fit-content",
          textTransform: "inherit",
          "&:hover": {
            backgroundColor: "secondary.main",
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Button>
  )
}
