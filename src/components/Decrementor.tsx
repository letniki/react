import React from 'react';
import {useAppContext} from "./ContextComponent";

const Decrementor =() => {
    const {dec}= useAppContext();
    return (
        <div>
            <button onClick={dec}>decrement</button>
        </div>
    );
}

export default Decrementor;