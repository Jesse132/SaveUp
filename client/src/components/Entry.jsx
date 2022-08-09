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
      <label>-{entry.description} </label>
      <label>${entry.amount} </label>
      <label>Posted on: {getDate()} </label>
      <button >Edit</button>
      <button >Delete</button>
    </div>
  )
}