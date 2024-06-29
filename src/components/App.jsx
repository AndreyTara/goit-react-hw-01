import users from "../../users.json";
import friends from "../../friends.json";
import transactions from "../../transactions.json";
import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import "./App.css";

function App() {
  return (
    <>
      {users.map((userData) => (
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      ))}
      <FriendList friends={friends} />
      <TransactionHistory props={transactions} />
    </>
  );
}

export default App;
