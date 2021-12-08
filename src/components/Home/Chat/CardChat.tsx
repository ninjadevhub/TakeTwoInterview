import React from "react"
import Box from "@mui/material/Box"
import ShowMessages from "./ShowMessage"
import SendMessage from "./SendMessage"
import { IChatRes } from "../../../types"
import { Card } from "../../../shared"
import { useRequest } from "../../../hooks"

export default function CardChat() {
  const [chats, setChats] = React.useState<Array<IChatRes>>([])
  const { error, loading, submitRequest } = useRequest({ method: "get", path: "/dev/get-messages" })
  React.useEffect(() => {
    submitRequest().then((res) => setChats(res?.Items || []))
  }, [])
  const onSendMessage = (msg: IChatRes) => {
    setChats([...chats, msg])
  }

  return (
    <Card
      sx={(theme) => ({
        width: 400,
        height: 322,
        [theme.breakpoints.down("lg")]: {
          width: 350,
          height: 300,
          marginInlineEnd: 0,
          marginBottom: "31px",
        },
      })}
    >
      <Box
        component='div'
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingTop: "50px",
          paddingInlineStart: "40px",
          paddingBottom: "30px",
          height: "calc(100% - 80px)",
          [theme.breakpoints.down("lg")]: {
            paddingTop: "20px",
            paddingInlineStart: "20px",
            paddingBottom: "10px",
            height: "calc(100% - 50px)",
          },
        })}
      >
        <ShowMessages chats={chats} error={error} loading={loading} />
        <SendMessage onSendMessage={onSendMessage} />
      </Box>
    </Card>
  )
}
