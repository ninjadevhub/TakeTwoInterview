import React from "react"
import Box from "@mui/material/Box"
import OutlinedInput from "@mui/material/OutlinedInput"
import { IChatReq, IChatRes } from "../../../types"
import { Button, Form } from "../../../shared"
import { useRequest } from "../../../hooks"
import SendIcon from "../../../assets/images/send-icon.png"

interface ISendMessageProps {
  onSendMessage(msg: IChatRes): void
}
export default function SendMessage(props: ISendMessageProps) {
  const [message, setMessage] = React.useState("")
  const [name, setName] = React.useState("")
  const { submitRequest, clearError } = useRequest({ method: "post", path: "/dev/add-message" })

  const onSubmit = (event: any) => {
    event.preventDefault()
    submitRequest<IChatReq>({ name, message }).then((res) => {
      props.onSendMessage({ author: name, message })
    })
  }

  return (
    <Form onSubmit={onSubmit} sx={{ width: "100%", marginTop: "10px" }}>
      <OutlinedInput
        name='name'
        type='name'
        required
        placeholder='name'
        // label='name'
        sx={(theme) => ({ minWidth: "200px", width: "50%", height: "44px" })}
        onChange={(e) => {
          setName(e.target.value)
          clearError()
        }}
        error={!name}
      />
      <Box sx={{ display: "flex", marginTop: "7px" }}>
        <OutlinedInput
          name='message'
          type='message'
          required
          placeholder='message'
          // label='message'
          sx={(theme) => ({ minWidth: "200px", width: "50%", height: "44px" })}
          onChange={(e) => {
            setMessage(e.target.value)
            clearError()
          }}
          error={!message}
        />
        <Button sx={(theme) => ({ width: "110px", marginInlineStart: "10px", typography: "h6" })} type='submit'>
          <img src={SendIcon} width='16px' height='13px' alt='send-arrow' />
          &nbsp;
          <span>Send</span>
        </Button>
      </Box>
    </Form>
  )
}
