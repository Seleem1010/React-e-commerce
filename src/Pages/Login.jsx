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
          "url(https://e0.pxfuel.com/wallpapers/6/121/desktop-wallpaper-retro-80s-ride-background-and-80s-car-aesthetic.jpg  )",
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
