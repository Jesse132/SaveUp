/* eslint-disable react/prop-types */
import { Form } from '../../styles/Forms.styled.components.js'
import { EntryView, Button, CancelButton } from '../../styles/Main.styled.components.js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';

export default function ListingForm({ entryUpdate, setEntryUpdate, userID, setPostLoginForms, setUserInfo }) {
  const [entry, setEntry] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [expense, setExpense] = useState('')

  let handleChange = (event, setState) => {
    setState(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    let date = new Date();
    axios.post('/entries', {
      description: description,
      amount: amount,
      owner: userID,
      date: date
    })
      .then((results) => setUserInfo(results.data))
      .catch((err) => console.log(err));
  }

  return (
    <EntryView>
      <Form className='container' onSubmit={event => { handleSubmit(event); setPostLoginForms(''); setEntryUpdate(!entryUpdate) }} >
        <h2 className='containerBox'>Enter your transaction here.</h2>
        <div >Description: <input
          type='text'
          value={description}
          onChange={event => handleChange(event, setDescription)}
          required /></div>
        <div >&emsp;&ensp;Amount: <input
          type='number'
          value={amount}
          onChange={event => handleChange(event, setAmount)}
          required /></div>
        <b className='containerBox'>Type of Transaction</b>
        <div className='containerRow'>
          <div style={{ padding: '0px 50px 0px 0px' }}>
            <div>Income</div>
            <GiReceiveMoney size={50} color ={'#ffc107'} />
            <div><input name='selectOne' type='radio' onClick={() => setAmount(Math.abs(amount))} required></input></div>
          </div>
          <div style={{ padding: '0px 0px 0px 50px' }}>
            <div>Expense</div>
            <GiPayMoney size={50} color ={'#ffc107'} />
            <div><input name='selectOne' type='radio' onClick={() => setAmount(-Math.abs(amount))}></input></div>
          </div>
        </div>
        <Button type='submit'>Submit</Button>
        <CancelButton onClick={() => setPostLoginForms('')}>Cancel</CancelButton>
      </Form >
    </EntryView >
  )
}
