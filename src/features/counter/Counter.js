import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  selectCount,
} from './counterSlice';
import {loginSuccess, logoutSuccess} from "../loginCheck/loginSlice"
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const store = useSelector((store)=>{return store});
  const login = useSelector((store)=>{return store.sliceReducer})
  const dispatch = useDispatch();
  console.log(login.user)
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button onClick={() => dispatch(loginSuccess("succesfulLogin"))}> Login success</button>
        <div>
          {login.user}
        </div>
      </div>
    
    </div>
  );
}
