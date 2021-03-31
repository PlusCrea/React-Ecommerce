import React from "react";
import { useHistory } from "react-router-dom";

export default function LogoutButton() {
  let history = useHistory();
  const onLogoutClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("userToken");
    history.push("/login");
  };
  return (
    <>
      <a
        href="/login"
        className="login-panel"
        onClick={(e) => {
          onLogoutClick(e);
        }}
      >
        <i className="fa fa-user"></i>
        Logout
      </a>
    </>
  );
}
