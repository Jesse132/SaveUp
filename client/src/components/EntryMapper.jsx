/* eslint-disable react/prop-types */
import { useState } from 'react';
import Entry from './Entry.jsx'
import { TransactionView, Button } from '../styles/Main.styled.components.js';

export default function EntryMapper({ entryList, setPostLoginForms }) {
  const [sortFilter, setSortFilter] = useState('');
  return (
    <TransactionView>
      <div className='container'>
        <h2>Your Transactions</h2>
        <label> Transactions currently sorted by: </label>
        <select
          value={sortFilter}
          onChange={(e) => setSortFilter(e.target.value)}>
          <option value='newest'>Helpfulness</option>
          <option value='oldest'>Oldest</option>
          <option value='transaction amount'>Transaction Amount</option>
        </select>
        <Button className='containerBox' onClick={() => setPostLoginForms('')}>Back</Button>
        <div style={{ padding: '20px 0px 0px 0px' }} className='mapper'>{entryList.map((entry, index) => <Entry entry={entry} key={index} />)}</div>
      </div>
    </TransactionView>
  );
}