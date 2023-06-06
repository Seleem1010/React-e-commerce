import React from "react";
import Form from "../components/functionComponents/Form";

export default function Login() {
  return (
    <div
      style={{
        minHeight: "85%",
        backgroundSize: "cover",
        backgroundPosition: "center",
  
        backgroundImage:
          "url(https://static.vecteezy.com/system/resources/previews/005/026/647/original/luxury-black-gold-background-elegant-and-unique-free-vector.jpg )",
        
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