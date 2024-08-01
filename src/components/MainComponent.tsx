import React from 'react';
import {useStore} from "./store";

const MainComponent = () => {
   const {counter} = useStore();
    return (
        <div>
            {counter}
        </div>
    );
};

export default MainComponent;