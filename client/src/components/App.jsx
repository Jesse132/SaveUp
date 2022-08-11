import { Main, Button } from '../styles/Main.styled.components.js';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/Global.styled.components.js';
import { FcMoneyTransfer } from 'react-icons/fc';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EntryMapper from './EntryMapper.jsx';
import UserForm from './forms/UserForm.jsx';
import LoginForm from './forms/LoginForm.jsx';
import EntryForm from './forms/EntryForm.jsx';
import HomePage from './HomePage.jsx';
import WorkManager from './WorkManager.jsx';
import WorkForm from './forms/WorkForm.jsx';

const darkTheme = {
  colors: {
    header: '#fff',
    body: '#343434',
  },
  fontColor: '#dfe3de'
};

const ThemeSetter = styled.div`
  color: ${props => props.theme.fontColor}
`;

export default function App() {
  const [userInfo, setUserInfo] = useState({});

  const [users, setUsers] = useState([]);
  const [preLoginForms, setPreLoginForms] = useState('');
  const [login, setLogin] = useState(false);

  const [entryList, setEntryList] = useState([]);
  const [entryUpdate, setEntryUpdate] = useState(false);
  const [postLoginForms, setPostLoginForms] = useState('');

  const [workList, setWorkList] = useState([]);
  const [workUpdate, setWorkUpdate] = useState(false);

  //Retrieves userList from database - can change to API
  let getUsers = () => {
    axios
      .get('/users')
      .then((results) => {
        setUsers(results.data);
      })
      .catch((err) => console.log(err));
  };

  //Retreives productList from database
  let getEntries = () => {
    axios
      .get('/entries', { params: { owner: userInfo._id } })
      .then((results) => setEntryList(results.data))
      .catch((err) => console.log(err));
  };

  //Retreives workList from database
  let getWork = () => {
    axios
      .get('/work', { params: { _id: userInfo._id } })
      .then((results) => setWorkList(results.data))
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getUsers();
  }, [users]);

  useEffect(() => {
    if (login) {
      getEntries(); getWork();
    }
  }, [login, entryUpdate, workUpdate])

  return (
    <ThemeProvider theme={darkTheme}>
      <ThemeSetter>
        <GlobalStyles />
        <Main>
          {login ? (
            < div >
              {postLoginForms === '' ? <HomePage userInfo={userInfo} setPostLoginForms={setPostLoginForms} setUserInfo={setUserInfo} /> : null}
              {postLoginForms === 'viewTransaction' ? <div>
                <EntryMapper entryList={entryList} userID={userInfo._id} setUserInfo={setUserInfo} setPostLoginForms={setPostLoginForms} entryUpdate={entryUpdate} setEntryUpdate={setEntryUpdate} /></div> : null}
              {postLoginForms === 'transaction' ? <EntryForm entryUpdate={entryUpdate} setEntryUpdate={setEntryUpdate} userID={userInfo._id} setPostLoginForms={setPostLoginForms} setUserInfo={setUserInfo} /> : null}
              {postLoginForms === 'work' ? <WorkManager workList={workList} setWorkList={setWorkList} setPostLoginForms={setPostLoginForms} userID={userInfo._id} /> : null}
              {postLoginForms === 'addWork' ? <WorkForm setPostLoginForms={setPostLoginForms} userInfo={userInfo} workUpdate={workUpdate} setWorkUpdate={setWorkUpdate} /> : null}
            </div>
          ) : (
            <div>
              <h3>Current members: {users.length}</h3>
              <div className='container'>
                <div>
                  <h1 className='containerBox'>Let's get started.</h1>
                </div>
                <FcMoneyTransfer size={70} className='containerBox' />
                <Button
                  onClick={() => { setPreLoginForms('create'); }}
                  className='containerBox'> Create an Account </Button>
                <Button onClick={() => { setPreLoginForms('login'); }}
                  className='containerBox'>Login </Button>
                <div>
                  {preLoginForms === 'create' ? (<UserForm setPreLoginForms={setPreLoginForms} />) : null}
                  {preLoginForms === 'login' ? (
                    <LoginForm
                      setPreLoginForms={setPreLoginForms}
                      setUserInfo={setUserInfo}
                      setLogin={setLogin}
                    />
                  ) : null}</div>
              </div>
            </div>
          )
          }
        </Main>
      </ThemeSetter>
    </ThemeProvider >
  );
}
