import css from "./FriendList.module.css";
import FriendListItem from "./../FriendListItem/FriendListItem";

function FriendList({ friends }) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {friends.map((friend) => {
          const { id } = friend;
          return (
            <li className={css.item} key={id}>
              <FriendListItem friend={friend} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FriendList;
