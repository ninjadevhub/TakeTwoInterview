import * as React from "react"
import Dialog, { DialogProps } from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"

interface IProps extends DialogProps {}

export default function AlertDialog(props: IProps) {
  return (
    <Dialog maxWidth='md' {...props} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
      <DialogContent>{props.children}</DialogContent>
    </Dialog>
  )
}
