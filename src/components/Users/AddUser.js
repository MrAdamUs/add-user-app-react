import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css';

const initialValues = { username: '', age: '' };

const AddUser = ({ userList, setUserList, onConfirm }) => {
  const [userInfo, setUserInfo] = useState(initialValues);
  const [error, setError] = useState('');

  const handelChange = (e) => {
    // const newUserInfo = { ...userInfo };
    // newUserInfo[e.target.name] = e.target.value;
    // setUserInfo(newUserInfo);
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      userInfo.username.trim().length === 0 ||
      userInfo.age.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'please enter a valid name and age (non-empty values)',
      });
      return;
    }
    if (+userInfo.age < 1) {
      setError({
        title: 'Invalid age',
        message: 'please enter a valid  age (> 0))',
      });
      return;
    }
    setUserList([...userList, userInfo]);
    setUserInfo(initialValues);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            name='username'
            onChange={handelChange}
            value={userInfo.username}
          />

          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='number'
            name='age'
            onChange={handelChange}
            value={userInfo.age}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
