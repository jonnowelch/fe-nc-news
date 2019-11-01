import React from 'react';
import UsersList from './UsersList';
import { Link } from '@reach/router';

export default function Header({ loggedInUser, handleSubmit }) {
  return (
    <div>
      <h1>
        <Link to={'/'}>Welcome to NC News </Link>
      </h1>
      Loggedin : {loggedInUser}
      <UsersList handleSubmit={handleSubmit} loggedInUser={loggedInUser} />
    </div>
  );
}
