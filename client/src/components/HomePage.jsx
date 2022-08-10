/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { AccountView, Button } from '../styles/Main.styled.components.js';
import Circle from './Circle/Circle.js'
import axios from 'axios';

export default function HomePage({ userInfo, setPostLoginForms, setUserInfo }) {
  const [goal, setGoal] = useState("");

  let addGoal = (goal) => {
    axios.put('/userGoal', { _id: userInfo._id, goal: goal })
      .then((results) => setUserInfo(results.data))
      .catch((err) => console.log(err));
  }

  let goalPercent = Math.round(userInfo.balance / userInfo.goal * 100);

  useEffect(() => {
    if (userInfo.balance >= userInfo.goal && userInfo.goal) {
      window.alert("Congratulations! You've met your goal!");
      addGoal(0);
    }
  }, [userInfo])

  return (
    <AccountView>
      <div className='container'>
        <h1>Welcome back, {userInfo.name}.</h1>
        <b className='containerBox'> Your current balance is:</b>
        <h1 style={{ color: '#32a83c' }}><strong>${userInfo.balance.toLocaleString()}</strong></h1>
        <h3 style={{ color: '#ff6f00' }}>{userInfo.goal ? `Current Goal: $${userInfo.goal.toLocaleString()}` : null}</h3>
        {/* <div>{Circle}</div> */}
        <div className='containerBox'> {userInfo.goal ? `You've reached ${goalPercent}% of your goal so far.`
          : <div className='containerBox'>
            <div> Set a savings Goal. </div>
            <div>
              <input
                type='number'
                value={goal}
                onChange={(e) => setGoal(e.target.value)} /></div>
            <Button className='containerBox' onClick={() => addGoal(goal)}>Add Goal</Button>
          </div>}
        </div>
        <Button className='containerBox' onClick={() => { setPostLoginForms('transaction'); }}>Add transactions</Button>
        <Button className='containerBox' onClick={() => { setPostLoginForms('viewTransaction'); }}>See transactions</Button>
      </div>
    </AccountView >
  );
}