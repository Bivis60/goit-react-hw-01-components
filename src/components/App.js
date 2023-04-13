import { FriendsList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import friends from '../friends.json';
import user from '../user.json'

export const App = () => {
  return (
    <>
      <Profile user={user}/>
      <FriendsList friends={friends}/>
    </>
  );
};
