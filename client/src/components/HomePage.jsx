/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { AccountView, Button } from '../styles/Main.styled.components.js';
import { useSpring, animated, config } from 'react-spring'
import { useState, useEffect } from 'react';

import axios from 'axios';

export default function HomePage({ userInfo, setPostLoginForms, setUserInfo }) {
  const [goal, setGoal] = useState("");

  let welcome = () => {
    const [flip, set] = useState(false)
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: false,
      reverse: flip,
      delay: 300,
      config: config.molasses
    })
  
    return <animated.h1 style={props}>Welcome back, {userInfo.name}.</animated.h1>
  }

  let addGoal = (goal) => {
    axios.put('/userGoal', { _id: userInfo._id, goal: goal })
      .then((results) => setUserInfo(results.data))
      .catch((err) => console.log(err));
  }

  let goalPercent = Math.round(userInfo.balance / userInfo.goal * 100);

  useEffect(() => {
    if (userInfo.balance >= userInfo.goal && userInfo.goal) {
      addGoal(0);
    }
  }, [userInfo])

  return (
    <AccountView>
      <div className='container'>
        {welcome()}
        <b className='containerBox'> Your current balance is: </b>
        {userInfo.balance >= 0 ? 
        <h1 style={{ color: '#32a83c' }}><strong>${userInfo.balance.toLocaleString()}</strong></h1> 
        : <h1 style={{ color: 'red' }}><strong>${userInfo.balance.toLocaleString()}</strong></h1>}
        <h3 style={{ color: '#ff6f00' }}>{userInfo.goal ? `Current Goal: $${userInfo.goal.toLocaleString()}` : null}</h3>
        <div> {userInfo.goal ? `You've reached ${goalPercent}% of your goal so far.`
          :
          <div>
            <div>Set a savings Goal.</div>
            <div>
              <input
                type='number'
                value={goal}
                onChange={(e) => setGoal(e.target.value)} /></div>
            <Button onClick={() => addGoal(goal)}>Add Goal</Button>
          </div>}
        </div>
        <Button onClick={() => { setPostLoginForms('transaction'); }}>Add transactions</Button>
        <Button onClick={() => { setPostLoginForms('viewTransaction'); }}>See transactions</Button>
        <Button onClick={() => { setPostLoginForms('work'); }}>Look for work</Button>
      </div>
    </AccountView >
  );
}