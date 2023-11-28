import userDefault from "../../images/user-default-profile.png";

function UserIcon({ icon, width, height }) {
  if (icon === null) {
    return (
      <img src={icon} width={width} height={height} alt="User Icon" />
    )
  }

  return (
    <img src={userDefault} width={width} height={height} alt="User Icon" />
  )
}

export default UserIcon;
