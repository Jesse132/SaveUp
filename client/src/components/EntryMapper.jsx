/* eslint-disable react/prop-types */
import { useState } from 'react';
import Entry from './Entry.jsx'
import { TransactionView, Button } from '../styles/Main.styled.components.js';

export default function EntryMapper({ entryList, userID, setUserInfo, setPostLoginForms, entryUpdate, setEntryUpdate }) {
  const [sortFilter, setSortFilter] = useState('');
  return (
    <TransactionView>
      <div className='container'>
        <h2 className='containerBox'>Your Transactions</h2>
        <label> Transactions currently sorted by: </label>
        <select className='containerBox'
          value={sortFilter}
          onChange={(e) => setSortFilter(e.target.value)}>
          <option value='relevance'>Relevance</option>
          <option value='income'>Income</option>
          <option value='expense'>Expenses</option>
        </select>
        <Button className='containerBox' onClick={() => setPostLoginForms('')}>Back</Button>
        <div style={{ padding: '20px 0px 0px 0px' }} className='mapper'>{entryList.slice().reverse().map((entry, index) => <Entry entry={entry} userID={userID} setUserInfo={setUserInfo} key={index} entryUpdate={entryUpdate} setEntryUpdate={setEntryUpdate} />)}</div>
      </div>
    </TransactionView>
  );
}