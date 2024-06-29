import css from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  const keysStats = Object.keys(stats);
  return (
    <div className={css.wrapper}>
      <div className={css.card}>
        <div className={css.container}>
          <img className={css.img} src={image} alt="User avatar" />
          <p className={css.title}>{name}</p>
          <p className={css.desc}>@{tag}</p>
          <p className={css.desc}>{location}</p>
        </div>
        <ul className={css.list}>
          {keysStats.map((key) => {
            return (
              <li className={css.item} key={key}>
                <span>{key}</span>
                <span className={css.stats}>{stats[key]}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
