/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function WorkEntry({ work }) {

  let date = new Date(work.date);
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];
  let displayedDate = `${months[date.getMonth().toLocaleString()]} ${date.getDate()}, ${date.getFullYear()}`;


  return (
    <div onClick={e => popUp(e)}>
      <h3>{work.work} for ${work.payment}</h3>
      <div>- {work.requestor}, {displayedDate}</div>
    </div>
  )

}