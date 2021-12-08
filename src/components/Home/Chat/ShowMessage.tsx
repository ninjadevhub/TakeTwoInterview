import React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Alert from "@mui/material/Alert"
import { IChatRes } from "../../../types"

interface IShowMessageProps {
  chats: Array<IChatRes>
  error: any
  loading: boolean
}
export default function ShowMessages({ chats, loading, error }: IShowMessageProps) {
  if (loading)
    return (
      <Alert severity='info' sx={{ marginInlineEnd: "40px" }}>
        Loading...
      </Alert>
    )
  if (error)
    return (
      <Alert severity='error' sx={{ marginInlineEnd: "40px" }}>
        {error?.message}
      </Alert>
    )
  return (
    <Box component='div' sx={{ display: "flex", maxWidth: "80%", maxHeight: "80%", overflow: "auto", flexDirection: "column" }}>
      {chats.map((chat, idx) => {
        return (
          <div key={idx} style={{ display: "flex" }}>
            <Typography variant='h5' sx={{ color: "common.white" }}>
              {chat.author + ":"}
            </Typography>
            <Typography variant='subtitle1' sx={{ color: "common.white" }}>
              &nbsp;
              {chat.message}
            </Typography>
          </div>
        )
      })}
    </Box>
  )
}
