import React from "react";
import Form from "../components/functionComponents/Form";
import "./login.css";

export default function Login() {
  return (
    <div
      style={{
        minHeight: "85%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage:
          "url(https://app.globalradar.com/Images/login-background.jpg  )",
      }}
    >
      <div
        style={{
          paddingTop: "15px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>Login</h1>
      </div>
      <Form />
    </div>
  );
}
