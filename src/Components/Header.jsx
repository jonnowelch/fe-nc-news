import React from 'react';
import UsersList from './UsersList';
import LogoutUser from './LogoutUser';
import { Link } from '@reach/router';

export default function Header({
  loggedInUser,
  loginUserFunction,
  logoutUserFunction
}) {
  return (
    <div>
      <h1>
        <Link to={'/'}>Welcome to NC News </Link>
      </h1>
      Logged in : {loggedInUser}
      <UsersList
        loginUserFunction={loginUserFunction}
        loggedInUser={loggedInUser}
      />
      <LogoutUser logoutUserFunction={logoutUserFunction} />
    </div>
  );
}
