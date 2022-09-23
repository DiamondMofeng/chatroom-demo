const Message = ({ msg }) => {
  console.log(msg)
  const { message, timestamp } = msg
  return (
    <div className="message">
      {/* <img src={userImage} alt="" /> */}
      <div className="message_info">
        {/* <h4>
          {user} timestamp...
        </h4> */}
        <p>{timestamp}</p>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
