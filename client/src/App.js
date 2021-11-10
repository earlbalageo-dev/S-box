import React, { useEffect } from 'react';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  testConnect,
  testSendMsg,
  testRecvMsg,
} from './state/actions/testAction';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(testConnect);
  }, [dispatch]);

  const sendIt = (e) => {
    e.preventDefault();
    dispatch(testSendMsg('BUTTTON HAS BEEN PRESSED'));
  };
  return (
    <div>
      <button onClick={sendIt}>sendTest</button>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non perspiciatis
      et in aspernatur obcaecati reiciendis deleniti repellat odio mollitia
      recusandae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
      sed.
    </div>
  );
}

export default App;
