import React from "react"
import CardMessage from "./Chat/CardChat"
import CardMeeting from "./Meeting/CardMeeting"
import CardVideo from "./Video/CardVideo"

export default function Home() {
  return (
    <>
      <CardMeeting />
      <CardVideo />
      <CardMessage />
    </>
  )
}
