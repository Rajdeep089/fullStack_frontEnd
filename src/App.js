import React from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function App() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
          fontSize: "30px",
          fontWeight: "bold",
          color: "blue",
          letterSpacing: "5px",
          fontFamily: "sans-serif",
          fontStyle: "italic",
          textDecoration: "underline",
        }}
      >
        My Login Signup App
      </h1>
      <LoginForm />
      <SignUpForm />
    </div>
  );
}

export default App;
