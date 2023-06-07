import React from "react";
import Form from "../components/functionComponents/Form";

export default function Login() {
  return (
    <div
      style={{
        // minHeight: "85%",
        height: "100vh",
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
        <h1 class="bg">Login</h1>
      </div>
      <Form />
    </div>
  );
}