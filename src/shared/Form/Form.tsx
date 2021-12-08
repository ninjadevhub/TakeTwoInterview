import * as React from "react"
import Box from "@mui/material/Box"
import { SxProps, Theme } from "@mui/material"
interface IProps {
  onSubmit?: (e: any) => void
  children: React.ReactNode
  sx: SxProps<Theme> | undefined
}
export default function Form({ children, onSubmit, ...rest }: IProps) {
  return (
    <Box component='form' autoComplete='off' onSubmit={onSubmit} {...rest}>
      {children}
    </Box>
  )
}
