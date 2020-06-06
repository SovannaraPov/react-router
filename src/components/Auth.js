import React from "react";
import { Redirect, Route } from "react-router-dom";
import Welcome from "./Welcome";

export default function Auth() {
  const handleLogin = () => {
    return <Redirect to="/welcome" />;
  };

  return (
    <div className="container">
      <div className="text-center">
        <h1>Authentication</h1>
        <br />
        <form>
          <label>Username</label>
          <input type="text" />
          <label>Password</label>
          <input type="password" />
          <button onClick={handleLogin} style={{ marginLeft: 10 }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
