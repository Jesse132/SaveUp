/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Entry({ entry }) {

  let date = new Date(entry.date);
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];
  let displayedDate = `${months[date.getMonth().toLocaleString()]} ${date.getDate()}, ${date.getFullYear()}`

  return (
    <div onClick={e => popUp(e)}>
      <b>{entry.description} </b>
      {entry.amount > 0 ?
        <label style={{ color: '#32a83c' }} >${entry.amount.toLocaleString()} </label>
        : <label style={{ color: 'red' }} >${Math.abs(entry.amount).toLocaleString()} </label>}
      <label><small> - {displayedDate} </small></label>
    </div>
  )
}