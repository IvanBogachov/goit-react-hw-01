import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.card}>
    <img src={avatar} alt="Avatar" width="48" />
    <p className={styles.cardTitle}>{name}</p>
    {isOnline ? (
      <p className={styles.online}>Online</p>
    ) : (
      <p className={styles.offline}>Offline</p>
    )}
  </div>
);

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);
export default FriendList;