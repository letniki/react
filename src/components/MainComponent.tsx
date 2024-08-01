import React from 'react';
import {useAppContext} from "./ContextComponent";

const MainComponent = () => {
   const {counter} = useAppContext();
    return (
        <div>
            {counter}
        </div>
    );
};

export default MainComponent;