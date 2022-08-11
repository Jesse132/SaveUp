/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {TiDeleteOutline} from 'react-icons/ti';

export default function Entry({ entry, userID, setUserInfo, entryUpdate, setEntryUpdate }) {
  const [del, setDel] = useState(false)

  let delItem = (e) => {
    e.preventDefault()
    axios.put('/entries', {_id: entry._id, userID: userID})
    .then(results => setUserInfo(results.data))
    .catch(err => console.log(err))
  };

  let date = new Date(entry.date);
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];
  let displayedDate = `${months[date.getMonth().toLocaleString()]} ${date.getDate()}, ${date.getFullYear()}`

  return (
    <div onClick = {()=> setDel(!del)}>
      <b>{entry.description} </b>
      {entry.amount > 0 ?
        <label style={{ color: '#32a83c' }} >${entry.amount.toLocaleString()} </label>
        : <label style={{ color: 'red' }} >${Math.abs(entry.amount).toLocaleString()} </label>}
      <label><small> - {displayedDate} </small></label>
      <label>{del ? <TiDeleteOutline color={'red'} onClick={e=>{delItem(e); setEntryUpdate(!entryUpdate)}}/> : null}</label>
    </div>
  )
}