import React from 'react';
import {useAppContext} from "./ContextComponent";



const Incrementor = () => {
    const {inc} = useAppContext();
    return (
        <div>
            <button onClick={inc}>increment</button>
        </div>
    );
};

export default Incrementor;