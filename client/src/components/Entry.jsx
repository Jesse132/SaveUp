/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Entry({ entry }) {

  let getDate = () => {
    return new Date(entry.date).toLocaleString('en-us', {
      month: 'long',
      date: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div>
      <b>{entry.item} </b>
      {entry.amount > 0 ?
        <label style={{ color: '#32a83c' }} >${entry.amount.toLocaleString()} </label>
        : <label style={{ color: 'red' }} >${entry.amount.toLocaleString()} </label>}
      <label> - {getDate()} </label>
    </div>
  )
}