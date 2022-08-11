/* eslint-disable react/prop-types */
import { TransactionView, Button } from '../styles/Main.styled.components.js';
import { useState } from 'react';
import WorkEntry from './WorkEntry.jsx'
import WorkDetails from './WorkDetails.jsx'

export default function WorkManager({ workList, setWorkList, setPostLoginForms, userID }) {
  const [viewInfo, setViewInfo] = useState('');
  return (
    <div>
      {viewInfo ? <WorkDetails viewInfo={viewInfo} setViewInfo={setViewInfo} setWorkList={setWorkList} userID={userID} />
        : <TransactionView>
          <div className='container'>
            <h2 className='containerBox'>Work</h2>
            <div>Here's what's currently available.</div>
            <Button onClick={() => setPostLoginForms('addWork')}> Add work </Button>
            <Button onClick={() => setPostLoginForms('')}>Back</Button>
            <div className='mapper'>{workList.slice().reverse().map((work, index) => <WorkEntry work={work} key={index} setViewInfo={setViewInfo} />)}</div>
          </div>
        </TransactionView>}
    </div>
  );
}