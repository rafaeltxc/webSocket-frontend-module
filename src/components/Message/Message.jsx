import './Message.css';

function MessageSent({ message, received }) {
  if (received === true) {
    return (
      <div className="divReceived">
        <div className="text received">
          <p>
            {message}
          </p>
        </div>
      </div>
    )
  }
  return (
    <div className="divSent">
      <div className="text sent">
        <p>
          {message}
        </p>
      </div>
    </div>
  )
}

export default MessageSent;

