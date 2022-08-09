/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function LoginForm({ setPreLoginForms, setUserInfo, setLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  let handleChange = (event, setState) => {
    setState(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get("/login", {
        params: {
          name: name,
          password: password,
        },
      })
      .then((results) => {
        if (results.data) {
          setUserInfo(results.data);
          setLogin(true);
          setPreLoginForms("");
        } else {
          window.alert("Incorrect username or password.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form
        onSubmit={(event) => { handleSubmit(event); }}>
        <div>
          Username:{" "}
          <input
            type="text"
            value={name}
            onChange={(event) => handleChange(event, setName)}
            required />
        </div>
        <div>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(event) => handleChange(event, setPassword)}
            required />
        </div>
        <button type="submit">Login</button>
        <button onClick={() => setPreLoginForms("")}>Cancel</button>
      </form>
      <button>Forgot Username?</button>
      <button>Forgot Password?</button>
    </div>
  );
}
