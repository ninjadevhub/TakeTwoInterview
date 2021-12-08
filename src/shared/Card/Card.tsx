import * as React from "react"
import Card, { CardProps } from "@mui/material/Card"

interface IProps extends CardProps {
  children: React.ReactNode
}
export default function CustomCard({ children, sx = [], ...props }: IProps) {
  return (
    <Card
      {...props}
      sx={[
        (theme) => ({
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          border: `2px solid ${theme.palette.common.white}`,
          boxShadow: "0px 10px 12px rgba",
          borderRadius: 0,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Card>
  )
}
