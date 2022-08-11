/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from '../../styles/Forms.styled.components.js'
import { EntryView, Button, CancelButton } from '../../styles/Main.styled.components.js';
import { FcTodoList } from 'react-icons/fc';

export default function WorkForm({ setPostLoginForms, userInfo, workUpdate, setWorkUpdate }) {
  const [work, setWork] = useState("");
  const [description, setDescription] = useState("");
  const [payment, setPayment] = useState("");
  const [contact, setContact] = useState("");

  let handleChange = (event, setState) => {
    setState(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    let date = new Date();
    axios
      .post("/work", {
        work: work,
        description: description,
        payment: payment,
        requestor: userInfo.name,
        requestorID: userInfo._id,
        contact: contact,
        worker: "",
        date: date
      })
      .then(() => console.log('work submitted'))
      .catch((err) => console.log(err));
  };
  return (
    <EntryView>
      <Form className='container'
        onSubmit={(event) => {
          window.alert("Work submitted");
          handleSubmit(event);
          setPostLoginForms('');
          setWorkUpdate(!workUpdate);
        }}
      >
        <h2 className='containerBox'>Add your posting here.</h2>
        <div><FcTodoList size={70} /></div>
        <div>
          &emsp;&emsp;&nbsp;&nbsp;Work:{" "}
          <input
            type="text"
            value={work}
            onChange={(event) => handleChange(event, setWork)}
            required
          />
        </div>
        <div>
          Description:{" "}
          <input
            type="text"
            value={description}
            onChange={(event) => handleChange(event, setDescription)}
            required
          />
        </div>
        <div>
          &emsp;Payment:{" "}
          <input
            type="text"
            value={payment}
            onChange={(event) => handleChange(event, setPayment)}
            required
          />
        </div>
        <div>
        &emsp;&emsp;Phone:{" "}
          <input
            type="text"
            value={contact}
            onChange={(event) => handleChange(event, setContact)}
            required
          />
        </div>
        <div>
          <div><Button type="submit">Submit</Button></div>
          <div><CancelButton onClick={() => setPostLoginForms("")}>Cancel</CancelButton></div>
        </div>
      </Form>
    </EntryView>
  );
}
