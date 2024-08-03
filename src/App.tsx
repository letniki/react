import React, {FC} from 'react';
import './App.css';
import {decrement, increment, incrementByAmount, useAppDispatch, useAppSelector} from "./redux/store";
import {useDispatch} from "react-redux";

const App: FC = ()=> {
    const value=useAppSelector(state => {
        return state.counter1SliceState.value
    });
    const dispatch = useAppDispatch();
  return (
    <div>
        <h2>{value}</h2>
      <button onClick={()=>{
         dispatch(increment());
      }}> increment</button>
        <button onClick={() => {
            dispatch(decrement())
        }}> decrement</button>
        <button onClick={()=>{
            dispatch(incrementByAmount(100))
        }}>increment by 100</button>
    </div>
  );
}

export default App;
