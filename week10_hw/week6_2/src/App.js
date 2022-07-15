import React, { useRef } from "react";
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: 'duyeong',
      dream: '개발자'
    },
    {
      id: 2,
      username: 'dudu',
      dream: '돈많은 백수'
    },
    {
      id: 3,
      username: 'duuu',
      dream: 'CEO'
    }
  ]

  const nextId = useRef(4);
  const onCreate = () => {
    nextId.current += 1;
  }
  return (
    <>
      <InputSample />
      <br />
      <hr />
      <UserList />
    </>
  );
};

export default App;