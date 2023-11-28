import styles from "../styles/Chat.module.css";

// Icons
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import homeIcon from "../images/conversation.png";

// Components
import User from "../components/User/User.jsx";
import UserOnlyName from "../components/UserOnlyName/UserOnlyName.jsx";
import Message from "../components/Message/Message";
import Icon from "../components/Icon/Icon.jsx";

import { useEffect, useState } from "react";

function Chat() {
  const [userIcon, setUserIcon] = useState(null);
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [conversation, setConversation] = useState(null);
  const usersList = filter
    ? users.filter((item) =>
        item.username.toLowerCase().includes(filter.toLowerCase()),
      )
    : users;

  useEffect(() => {
    setUsers([
      {
        id: 1,
        username: "User 1",
        message: "A message",
        messageTime: "10:05",
        messages: [
          {
            received: true,
            message: "recieved",
          },
          {
            received: false,
            message: "sent",
          },
        ],
      },
      {
        id: 2,
        username: "Test",
        message: "Another message",
        messageTime: "08:57",
      },
      {
        id: 3,
        username: "Another one",
        message: "Message",
        messageTime: "17:20",
      },
    ]);
  }, []);

  function handlerFilter(event) {
    setFilter(event.target.value);
  }

  function handlerMessage(event) {
    setMessage(event.target.value);
  }

  return (
    <div className={styles.root}>
      <div className={styles.contactsDiv}>
        <nav className={styles.contactsNavbar}>
          <div className={styles.contactsInfo}>
            <p>Chats</p>
            <div className={styles.contactsInfoOptions}>
              <Icon icon={<RateReviewOutlinedIcon />} />
              <Icon icon={<MoreVertOutlinedIcon />} />
            </div>
          </div>
          <div className={styles.contactsSearchInput}>
            <SearchOutlinedIcon className={styles.inputIcon} />
            <input
              type="text"
              placeholder="Filter"
              value={filter}
              onChange={(event) => handlerFilter(event)}
            />
          </div>
        </nav>
        <div className={styles.contacts}>
          {/* CONTACTS EXAMPLE */}
          {usersList.map((item) => {
            return (
              <User
                key={item.id}
                username={item.username}
                message={item.message}
                messageTime={item.messageTime}
              />
            );
          })}
          {/* CONTACTS EXAMPLE */}
        </div>
      </div>
      <div className={styles.messagesDiv}>
          <>
            <nav className={styles.messagesNavbar}>
              <UserOnlyName icon={userIcon} username={"user"} />
              <Icon icon={<MoreVertOutlinedIcon />} />
            </nav>
            <div className={styles.messages}>
              <Message message={"asd"} received={true} />
              <Message message={"asd"} received={false} />
            </div>
            <div className={styles.messagesInput}>
              <Icon icon={<SentimentSatisfiedAltIcon />} />
              <Icon icon={<AttachFileIcon />} />

              <input
                type="text"
                placeholder="Message"
                value={message}
                onChange={handlerMessage}
              />
              <Icon icon={<MicIcon />} />
            </div>
          </>
      </div>
    </div>
  );
}
export default Chat;
