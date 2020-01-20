import React from "react";
import UsersList from "./UsersList";
import LogoutUser from "./LogoutUser";
import { Link } from "@reach/router";
import LoginUser from "./LoginUser";

export default function Header({
  loggedInUser,
  loginUserFunction,
  logoutUserFunction
}) {
  return (
    <h1 className="header-container">
      <Link to={"/"}>NC News </Link>
      <div className="login-container">
        <div className="login-text">Logged in : {loggedInUser} </div>
        <UsersList
          className="users-list"
          loginUserFunction={loginUserFunction}
          loggedInUser={loggedInUser}
        />
        <LoginUser
          className="login-button"
          loginUserFunction={loginUserFunction}
        />
        <LogoutUser
          className="logout-button"
          logoutUserFunction={logoutUserFunction}
        />
      </div>
    </h1>
  );
}
