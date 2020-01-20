import React from "react";
import UsersList from "./UsersList";
import LogoutUser from "./LogoutUser";
import { Link } from "@reach/router";

export default function Header({
  loggedInUser,
  loginUserFunction,
  logoutUserFunction
}) {
  return (
    <h1 className="header-container">
      <Link to={"/"}>NC News </Link>
      <div className="log-in-container">
        <div className="log-in-text">Logged in : {loggedInUser} </div>
        <UsersList
          className="log-in-button"
          loginUserFunction={loginUserFunction}
          loggedInUser={loggedInUser}
        />
        <LogoutUser
          className="logout-button"
          logoutUserFunction={logoutUserFunction}
        />
      </div>
    </h1>
  );
}
