import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendList';
import user from '../user.json'
import data from '../data.json';
import friends from '../friends.json';



export const App = () => {
  return (
    <>
      <Profile user={user}/>
      <Statistics title="Upload stats" stats = {data}/>
      <FriendsList friends={friends}/>
    </>
  );
};