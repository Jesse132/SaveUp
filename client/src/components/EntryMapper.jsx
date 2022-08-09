/* eslint-disable react/prop-types */
import React from 'react';
import Entry from './Entry.jsx'

export default function EntryMapper({ entryList, setPostLoginForms }) {
  return (
    <div>
      <button onClick={() => setPostLoginForms('')}>Back</button>
      {entryList.map((entry, index) => <Entry entry={entry} key={index} />)}
    </div>
  );
}