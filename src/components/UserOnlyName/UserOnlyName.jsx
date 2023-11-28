import UserIcon from "../UserIcon/UserIcon";
import './UserOnlyName.css';

function UserOnlyName({ photo, username }) {
  return (
    <div className="div">
      <UserIcon icon={photo} width={40} height={40} />
      <p className="username">{username}</p>
    </div>
  )
}

export default UserOnlyName;

