import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EntryMapper from './EntryMapper.jsx';
import UserForm from './forms/UserForm.jsx';
import LoginForm from './forms/LoginForm.jsx';
import EntryForm from './forms/EntryForm.jsx';
import HomePage from './HomePage.jsx';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const [users, setUsers] = useState([]);
  const [preLoginForms, setPreLoginForms] = useState('');
  const [login, setLogin] = useState(false);

  const [entryList, setEntryList] = useState([]);
  const [entryUpdate, setEntryUpdate] = useState(false);
  const [sortFilter, setSortFilter] = useState('');
  const [postLoginForms, setPostLoginForms] = useState('');

  //Retrieves userList from database - can change to API
  let getUsers = () => {
    axios
      .get('/users')
      .then((results) => {
        setUsers(results.data);
      })
      .catch((err) => console.log(err));
  };

  //Retreives productList from database - can change to API
  let getEntries = () => {
    axios
      .get('/entries', { params: { owner: userInfo._id } })
      .then((results) => setEntryList(results.data))
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getUsers();
  }, [users]);

  useEffect(() => {
    login ? getEntries() : null
  }, [login, entryUpdate])



  return (
    <div>
      <h2>Current members using the app: {users.length}</h2>
      {login ? (
        < div >
          {postLoginForms === '' ? <HomePage userInfo={userInfo} setPostLoginForms={setPostLoginForms} setUserInfo={setUserInfo} /> : null}
          {postLoginForms === 'viewTransaction' ? <div>
            <h2>Your Transactions</h2>
            <label> Transactions currently sorted by: </label>
            <select
              value={sortFilter}
              onChange={(event) => setSortFilter(event.target.value)}
            >
              <option value='newest'>Helpfulness</option>
              <option value='oldest'>Oldest</option>
              <option value='transaction amount'>Transaction Amount</option>
            </select>
            <EntryMapper entryList={entryList} userInfo={userInfo} setPostLoginForms={setPostLoginForms} /></div> : null}
          {postLoginForms === 'transaction' ? <EntryForm entryUpdate={entryUpdate} setEntryUpdate={setEntryUpdate} userID={userInfo._id} setPostLoginForms={setPostLoginForms} setUserInfo={setUserInfo} /> : null}
        </div>
      ) : (
        <div>
          <button
            onClick={() => { setPreLoginForms('create'); }}> Create an Account </button>
          <button onClick={() => { setPreLoginForms('login'); }}>Login </button>
          {preLoginForms === 'create' ? (<UserForm setPreLoginForms={setPreLoginForms} />) : null}
          {preLoginForms === 'login' ? (
            <LoginForm
              setPreLoginForms={setPreLoginForms}
              setUserInfo={setUserInfo}
              setLogin={setLogin}
            />
          ) : null}
        </div>
      )
      }
    </div >
  );
}
