/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useState } from 'react';
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
    <div>
      <h2>Welcome back, {userInfo.name}.</h2>
      <div>
        <b> Your current balance is:</b>
      </div>
      <div>{userInfo.balance}
        <div> {userInfo.goal ? `You've reached ${goalPercent}% of your goal so far.`
          : <div><div> Set a savings goal! </div>
            <input
              type='number'
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
            <button onClick={e => addGoal(e)}>Add Goal</button></div>}
        </div>
      </div>

      <button onClick={() => { setPostLoginForms('transaction'); }}>Add transactions</button>
      <button onClick={() => { setPostLoginForms('viewTransaction'); }}>See transactions</button>
    </div >
  );
}