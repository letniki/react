import React, {FC, useState} from 'react';
import './App.css';
import {usePrevious, useToggle} from "./hooks/CustomHooks";



const App: FC = ()=> {
  const [value1, toggleValue] = useToggle(false);

  const[value2, setValue2]=useState<number>(0);
  const previousValue=usePrevious<number>(value2);

    const IncreaseNumber = (step:number)=>{
        setValue2(currentCount=> currentCount+step);
    };
    const ReduceNumber =(step:number)=>{
        setValue2(currentCount=>currentCount - step);
    }
  return (
      <div>
          <h2>useToggle hook</h2>
          <button onClick={toggleValue}>Show/hide text</button>
          {value1 && <p>This text is visible</p>}
          <hr/>

          <h2>usePrevious hook</h2>
          <button onClick={() => {
              IncreaseNumber(2)
          }}>+2 for number
          </button>
          <button onClick={() => {
              ReduceNumber(1)
          }}> -1 for number
          </button>
          <p>Current: {value2} - Previous: {previousValue}</p>
      </div>
  );
}

export default App;
