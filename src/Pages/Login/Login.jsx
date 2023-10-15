import React from "react";
import "./Login.scss";
import { tel } from "../../assets/img";

export const Login = () => {
  return (
    <div className="login-container">
      <div className="login">
        <img src={logo} />
      </div>
      <div className="img-cont">
        <img src={tel} alt="telphone" className="img" />
      </div>
    </div>
  );
};
