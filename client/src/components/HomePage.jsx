/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { AccountView } from '../styles/Main.styled.components.js';
import Circle from './Circle.jsx';
import axios from 'axios';

export default function HomePage({ userInfo, setPostLoginForms, setUserInfo }) {
  const [goal, setGoal] = useState("");

  let addGoal = (e) => {
    e.preventDefault();
    axios.put('/userGoal', { _id: userInfo._id, goal: goal })
      .then((results) => setUserInfo(results.data))
      .catch((err) => console.log(err));
  }

  let goalPercent = Math.round(userInfo.balance / userInfo.goal * 100);

  return (
    <AccountView>
      <div className='container'>
        <h1>Welcome back, {userInfo.name}.</h1>
        <b className='containerBox'> Your current balance is:</b>
        <h1 style={{ color: '#32a83c' }}><strong>${userInfo.balance.toLocaleString()}</strong></h1>
        <h3 style={{ color: '#ff6f00' }}>{userInfo.goal ? `Current Goal: $${userInfo.goal.toLocaleString()}` : null}</h3>
        {/* <Circle percent={goalPercent} /> */}
        <div className='containerBox'> {userInfo.goal ? `You've reached ${goalPercent}% of your goal so far.`
          : <div>
            <div> Set a savings goal! </div>
            <input
              type='number'
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
            <button onClick={e => addGoal(e)}>Add Goal</button>
          </div>}
        </div>


        <button onClick={() => { setPostLoginForms('transaction'); }}>Add transactions</button>
        <button onClick={() => { setPostLoginForms('viewTransaction'); }}>See transactions</button>
      </div>
    </AccountView >
  );
}