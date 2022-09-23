import Message from "./Message"

const MessageList = ({ messages }) => {
  console.log(messages)
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <Message key={index} msg={message} />
      ))}
    </div>
  )
}

export default MessageList
