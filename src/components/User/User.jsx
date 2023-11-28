import UserIcon from "../UserIcon/UserIcon";
import './User.css';

function Contacs({ username, message, messageTime }) {
  return (
    <button className="contact">
      <UserIcon width={40} height={40} />
      <div className="contactUnit">
        <div className="contactName">
          <p className="contactUsername">{username}</p>
          <p>{messageTime}</p>
        </div>
        <p className="contactMessage">{message}</p>
      </div>
    </button>
  );
}

export default Contacs;
