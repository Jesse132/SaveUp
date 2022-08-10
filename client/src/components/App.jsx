import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EntryMapper from './EntryMapper.jsx';
import UserForm from './forms/UserForm.jsx';
import LoginForm from './forms/LoginForm.jsx';
import EntryForm from './forms/EntryForm.jsx';
import HomePage from './HomePage.jsx';
import { Main, Button } from '../styles/Main.styled.components.js';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/Global.styled.components.js';
import styled from 'styled-components';
import { FcMoneyTransfer } from 'react-icons/fc';
// import Map from './Map.jsx';

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
    <ThemeProvider theme={darkTheme}>
      <ThemeSetter>
        <GlobalStyles />
        <Main>
          {login ? (
            < div >
              {postLoginForms === '' ? <HomePage userInfo={userInfo} setPostLoginForms={setPostLoginForms} setUserInfo={setUserInfo} /> : null}
              {postLoginForms === 'viewTransaction' ? <div>
                <EntryMapper entryList={entryList} userInfo={userInfo} setPostLoginForms={setPostLoginForms} /></div> : null}
              {postLoginForms === 'transaction' ? <EntryForm entryUpdate={entryUpdate} setEntryUpdate={setEntryUpdate} userID={userInfo._id} setPostLoginForms={setPostLoginForms} setUserInfo={setUserInfo} /> : null}
              {postLoginForms === 'map' ? <Map /> : null}
            </div>
          ) : (
            <div>
              <h3>Current members: {users.length}</h3>
              <div className='container'>
                <div className='containerBox'>
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
