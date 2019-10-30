import React from 'react';
import UsersList from './UsersList';
import { Link } from '@reach/router';

export default function Header() {
  return (
    <div>
      <h1>
        {' '}
        <Link to={'/'}>Welcome to NC News </Link>
      </h1>
      <UsersList />
    </div>
  );
}
