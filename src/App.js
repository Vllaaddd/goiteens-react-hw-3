import FriendList from "./components/FriendsList";
import Statistics from "./components/Statistics";
import data from './data.json';
import friends from './friends.json';

export default function App() {
  return (
    <>
      <Statistics title='UPLOAD STATS' stats={data} />
      <FriendList friends={friends} />
    </>
  );
}