import React from 'react';
import Card from '../UI/Card';

import classes from './UsersList.module.css';

const UserList = ({ userList }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {userList.map((user, i) => (
          <li key={i}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
