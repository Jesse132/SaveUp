/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AccountView, Button } from '../styles/Main.styled.components.js';

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
        <h1 className='containerBox'>{viewInfo.work}</h1>
        <h2 className='containerBox' style={{ color: 'green' }}><strong>${viewInfo.payment}</strong></h2>
        <div className='containerBox'>{viewInfo.description}</div>
        <b className='containerBox'>{viewInfo.requestor}</b>
        <div className='containerBox'>Call or Text: {viewInfo.Contact}</div>
        <Button className='containerBox' onClick={(e) => { putWork(e) }}>Accept</Button>
        <Button className='containerBox' onClick={() => setViewInfo('')} >Cancel</Button>
      </div>
    </AccountView >
  )

}