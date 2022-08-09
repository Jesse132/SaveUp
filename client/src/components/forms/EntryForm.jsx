/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ListingForm({ entryUpdate, setEntryUpdate, userID, setPostLoginForms, setUserInfo }) {
  const [entry, setEntry] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [expense, setExpense] = useState('')

  let handleChange = (event, setState) => {
    setState(event.target.value);
  };

  useEffect(() => { expense ? setAmount(-amount) : null; }, [expense])

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(amount)
    let date = new Date();
    axios.post('/entries', {
      item: entry,
      description: description,
      amount: amount,
      owner: userID,
      date: date
    })
      .then((results) => setUserInfo(results.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <form onSubmit={event => { handleSubmit(event); setPostLoginForms(''); setEntryUpdate(!entryUpdate) }} >
        <div>Entry: <input
          type='text'
          value={entry}
          onChange={event => handleChange(event, setEntry)}
          required /></div>
        <div>Description: <input
          type='text'
          value={description}
          onChange={event => handleChange(event, setDescription)}
          required /></div>
        <div>Amount: <input
          type='number'
          value={amount}
          onChange={event => handleChange(event, setAmount)}
          required /></div>
        <div>Type of Transaction<select
          type='text'
          value={expense}
          onChange={event => handleChange(event, setExpense)}
          required>
          <option value="">Please select an option</option>
          <option value={false}>Income</option>
          <option value={true}>Expense</option></select></div>
        <button type='submit'>Submit</button>
        <button onClick={() => setPostLoginForms('')}>Cancel</button>
      </form>
    </div >
  )
}
