import React from 'react';
import {useStore} from "./store";




const Incrementor = () => {
    const {inc} = useStore();
    return (
        <div>
            <button onClick={inc}>increment</button>
        </div>
    );
};

export default Incrementor;