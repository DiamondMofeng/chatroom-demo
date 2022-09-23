import { useState } from "react"

const MessageInput = ({ sendMessage }) => {

  const [message, setMessage] = useState('')

  return (
    <div>
      <input placeholder="说点什么" onChange={(event) => setMessage(event.target.value)}></input>
      <button onClick={() => sendMessage(message)}>发送</button>
    </div>
  )
}

export default MessageInput
