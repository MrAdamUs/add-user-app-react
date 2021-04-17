import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [userList, setUserList] = useState([]);
  console.log(userList);
  return (
    <div>
      <AddUser userList={userList} setUserList={setUserList} />
      <UserList userList={userList} />
    </div>
  );
}

export default App;
