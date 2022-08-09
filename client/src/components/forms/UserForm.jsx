/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserForm({ setPreLoginForms }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [member, setMember] = useState("");

  let handleChange = (event, setState) => {
    setState(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/users", {
        name: name,
        password: password,
        balance: 0,
        email: email,
      })
      .then(() => setPreLoginForms(""))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form
        onSubmit={(event) => {
          window.alert("Account Made!");
          handleSubmit(event);
        }}
      >
        <div>
          Username:{" "}
          <input
            type="text"
            value={name}
            onChange={(event) => handleChange(event, setName)}
            required
          />
        </div>
        <div>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(event) => handleChange(event, setPassword)}
            required
          />
        </div>
        <div>
          Email:{" "}
          <input
            type="email"
            value={email}
            onChange={(event) => handleChange(event, setEmail)}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <button onClick={() => setPreLoginForms("")}>Cancel</button>
      </form>
    </div>
  );
}
