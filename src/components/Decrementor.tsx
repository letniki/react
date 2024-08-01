import React from 'react';
import {useStore} from "./store";

const Decrementor =() => {
    const {dec} = useStore();
    return (
        <div>
            <button onClick={dec}>decrement</button>
        </div>
    );
}

export default Decrementor;