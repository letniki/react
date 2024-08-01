import React, {createContext, FC, useContext, useState} from 'react';
import './App.css';
import Incrementor from "./components/Incrementor";
import MainComponent from "./components/MainComponent";
import Decrementor from "./components/Decrementor";
import {StoreType} from "./models/StoreType";
import {MyContext} from "./components/ContextComponent";



const App: FC = ()=> {
    const [globalCounter, setGlobalCounter] = useState<number>(0);
    return (
    <div>
      <MyContext.Provider value={{
          counter:globalCounter,
          inc:()=>{
              setGlobalCounter(prevState => --prevState);
          },
          dec:() =>{
              setGlobalCounter(prevState => ++prevState);
          }
      }}>
      <MainComponent/>
      <Incrementor/>
      <Decrementor/>
    </MyContext.Provider>
    </div>
  );
}

export default App;
