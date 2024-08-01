import React, {FC} from 'react';
import './App.css';
import Incrementor from "./components/Incrementor";
import MainComponent from "./components/MainComponent";
import Decrementor from "./components/Decrementor";


const App: FC = ()=> {
    return (
    <div>
      <MainComponent/>
      <Incrementor/>
      <Decrementor/>
    </div>
  );
}

export default App;
