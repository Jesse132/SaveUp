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
        <div className='containerBox'><FcTodoList size={70} /></div>
        <div className='containerBox'>
          &emsp;&emsp;&emsp;Work:{" "}
          <input
            type="text"
            value={work}
            onChange={(event) => handleChange(event, setWork)}
            required
          />
        </div>
        <div className='containerBox'>
          Description:{" "}
          <input
            type="text"
            value={description}
            onChange={(event) => handleChange(event, setDescription)}
            required
          />
        </div>
        <div className='containerBox'>
          &emsp;Payment:{" "}
          <input
            type="number"
            value={payment}
            onChange={(event) => handleChange(event, setPayment)}
            required
          />
        </div>
        <div className='containerBox'>
          <div className='containerBox'><Button type="submit">Submit</Button></div>
          <div className='containerBox'><CancelButton onClick={() => setPostLoginForms("")}>Cancel</CancelButton></div>
        </div>
      </Form>
    </EntryView>
  );
}
