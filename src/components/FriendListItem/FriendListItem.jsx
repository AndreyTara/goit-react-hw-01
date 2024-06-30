import css from "./FriendListItem.module.css";

function FriendListItem({ friend }) {
  const { avatar, name, isOnline } = friend;
  return (
    <div className={css.wrap}>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.title}>{name}</p>
      {isOnline ? (
        <p className={css.onLine}>Online</p>
      ) : (
        <p className={css.offLine}>Offline</p>
      )}
    </div>
  );
}

export default FriendListItem;
