import React from "react";

function User({user}){
  return (
    <div>
      <b>{user.username}</b> <span>({user.dream})</span>
    </div>
  )
}

function UserList(){
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
  ];

  return (
    <div>
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </div>
  )
}

export default UserList;