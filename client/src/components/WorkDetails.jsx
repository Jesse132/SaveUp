/* eslint-disable react/prop-types */
import { AccountView, Button, CancelButton } from '../styles/Main.styled.components.js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function WorkDetails({ viewInfo, setViewInfo, setWorkList, userID }) {

  let putWork = (e) => {
    e.preventDefault();
    axios.put('/work', { _id: viewInfo._id, worker: userID })
      .then((results) => { setWorkList(results.data); setViewInfo('') })
      .catch(err => console.log(err))
  }

  return (
    <AccountView>
      <div className='container'>
        <h1>{viewInfo.work}</h1>
        <h1 style={{ color: 'green' }}><strong>${viewInfo.payment}</strong></h1>
        <div >{viewInfo.description}</div>
        <b className='containerBox'>{viewInfo.requestor}</b>
        <div >Call or Text: {viewInfo.contact}</div>
        <Button onClick={(e) => { putWork(e) }}>Accept</Button>
        <CancelButton onClick={() => setViewInfo('')} >Cancel</CancelButton>
      </div>
    </AccountView >
  )

}