import Profile from './components/Profile/Profile';
// import FriendList from './FriendList/FriendList';

import userData from "./components/data/userData.json";
import friends from "./components/data/friends.json";

export default function App() {
  return (
    <>
			<Profile
				name={userData.username}
				tag={userData.tag}
				location={userData.location}
				image={userData.avatar}
				stats={userData.stats}
			/>
			{/* <FriendList friends={friends} /> */}
		</>
  );
}