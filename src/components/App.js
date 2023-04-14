import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transaction from '../transactions.json';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transaction} />
    </>
  );
};
