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
    <h1 className="header-flex-container">
      <Link to={'/'}>Welcome to NC News </Link>
      <div>
        Logged in : {loggedInUser}
        <UsersList
          loginUserFunction={loginUserFunction}
          loggedInUser={loggedInUser}
        />
        <LogoutUser logoutUserFunction={logoutUserFunction} />
      </div>
    </h1>
  );
}
