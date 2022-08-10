/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Work } from '../styles/Main.styled.components.js';

export default function WorkEntry({ work, setWorkList, setViewInfo }) {

  let date = new Date(work.date);
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];
  let displayedDate = `${months[date.getMonth().toLocaleString()]} ${date.getDate()}, ${date.getFullYear()}`;


  return (
    <Work onClick={() => setViewInfo(work)}>
      <div>{work.work} for ${work.payment}</div>
      <small>- {work.requestor}, {displayedDate}</small>
    </Work>

  )

}