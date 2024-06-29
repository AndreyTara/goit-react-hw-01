import css from "./FriendList.module.css";

function FriendListItem({ props }) {
  const { avatar, name, isOnline } = props;
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

function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((friend) => {
        const { id } = friend;
        return (
          <li className={css.item} key={id}>
            <FriendListItem props={friend} />
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;
