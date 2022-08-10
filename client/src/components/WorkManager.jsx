/* eslint-disable react/prop-types */
import { useState } from 'react';
import WorkEntry from './WorkEntry.jsx'
import { TransactionView, Button } from '../styles/Main.styled.components.js';

export default function WorkManager({ workList, setWorkList, setPostLoginForms }) {

  return (
    <TransactionView>
      <div className='container'>
        <h2 className='containerBox'>Available Work</h2>
        <Button className='containerBox' onClick={() => setPostLoginForms('')}>Back</Button>
        <div style={{ padding: '30px 0px 0px 0px' }} className='mapper'>{workList.slice().reverse().map((work, index) => <WorkEntry work={work} key={index} />)}</div>
      </div>
    </TransactionView>
  );
}